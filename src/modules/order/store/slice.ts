import type { PayloadAction } from '@reduxjs/toolkit';
import type { CreateDeliveryOrderResponse } from '@src/shared/api/actions/createDeliveryOrder';

import { createSlice } from '@reduxjs/toolkit';

import type { OrderState } from './types';

import { createDeliveryOrderThunk } from './thunks';

const initialState: OrderState = {
	order: {
		isLoading: false,
		error: '',
		data: null,
	},
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createDeliveryOrderThunk.pending, (state) => {
				state.order.isLoading = true;
			})
			.addCase(createDeliveryOrderThunk.rejected, (state, action) => {
				state.order.isLoading = false;
				state.order.error = action.error.message ?? '';
			})
			.addCase(
				createDeliveryOrderThunk.fulfilled,
				(state, action: PayloadAction<CreateDeliveryOrderResponse>) => {
					state.order.isLoading = false;
					state.order.data = action.payload.order;
				},
			);
	},
});

export const { reset } = orderSlice.actions;
