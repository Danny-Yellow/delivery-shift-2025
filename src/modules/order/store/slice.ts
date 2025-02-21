import type { PayloadAction } from '@reduxjs/toolkit';
import type { CreateDeliveryOrderResponse } from '@src/shared/api/actions/createDeliveryOrder';

import { createSlice } from '@reduxjs/toolkit';

import type { OrderState } from './types';

import { createDeliveryOrderThunk } from './thunks';

const initialState: OrderState = {
	isLoading: false,
	error: '',
	data: null,
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
				state.isLoading = true;
			})
			.addCase(createDeliveryOrderThunk.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message ?? '';
			})
			.addCase(
				createDeliveryOrderThunk.fulfilled,
				(state, action: PayloadAction<CreateDeliveryOrderResponse>) => {
					state.isLoading = false;
					state.data = action.payload.order;
				},
			);
	},
});

export const { reset } = orderSlice.actions;
