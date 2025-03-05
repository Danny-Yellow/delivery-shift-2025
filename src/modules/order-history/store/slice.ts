import type { PayloadAction } from '@reduxjs/toolkit';
import type { getOrdersResponse } from '@src/shared/api/entities/orders';

import { createSlice } from '@reduxjs/toolkit';

import type { OrderHistoryState } from './types';

import { getOrdersThunk } from './thunks';

const initialState: OrderHistoryState = {
	data: null,
	error: '',
	isLoading: false,
};

export const orderHistorySlice = createSlice({
	name: 'orderHistory',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			// Get orders
			.addCase(getOrdersThunk.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getOrdersThunk.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message ?? '';
			})
			.addCase(getOrdersThunk.fulfilled, (state, action: PayloadAction<getOrdersResponse>) => {
				state.isLoading = false;
				state.data = action.payload.orders;
			});
	},
});

export const { reset } = orderHistorySlice.actions;
