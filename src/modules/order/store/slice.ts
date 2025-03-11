import type { PayloadAction } from '@reduxjs/toolkit';
import type { CreateDeliveryOrderResponse } from '@src/shared/api/actions/createDeliveryOrder';
import type { GetOrderResponse, GetOrdersResponse } from '@src/shared/api/entities/orders';

import { createSlice } from '@reduxjs/toolkit';

import type { OrderState } from './types';

import { createDeliveryOrderThunk, getOrdersThunk, getOrderThunk } from './thunks';

const initialState: OrderState = {
	orderHistory: {
		isLoading: false,
		error: '',
		data: null,
	},
	orderRequest: {
		isLoading: false,
		error: '',
		data: null,
	},
	orderDetails: {
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
			// Create order
			.addCase(createDeliveryOrderThunk.pending, (state) => {
				state.orderRequest.isLoading = true;
			})
			.addCase(createDeliveryOrderThunk.rejected, (state, action) => {
				state.orderRequest.isLoading = false;
				state.orderRequest.error = action.error.message ?? '';
			})
			.addCase(
				createDeliveryOrderThunk.fulfilled,
				(state, action: PayloadAction<CreateDeliveryOrderResponse>) => {
					state.orderRequest.isLoading = false;
					state.orderRequest.data = action.payload.order;
				},
			)
			// Get order history
			.addCase(getOrdersThunk.pending, (state) => {
				state.orderHistory.isLoading = true;
			})
			.addCase(getOrdersThunk.rejected, (state, action) => {
				state.orderHistory.isLoading = false;
				state.orderHistory.error = action.error.message ?? '';
			})
			.addCase(getOrdersThunk.fulfilled, (state, action: PayloadAction<GetOrdersResponse>) => {
				state.orderHistory.isLoading = false;
				state.orderHistory.data = action.payload.orders;
			})
			// Get order details
			.addCase(getOrderThunk.pending, (state) => {
				state.orderDetails.isLoading = true;
			})
			.addCase(getOrderThunk.rejected, (state, action) => {
				state.orderDetails.isLoading = false;
				state.orderDetails.error = action.error.message ?? '';
			})
			.addCase(getOrderThunk.fulfilled, (state, action: PayloadAction<GetOrderResponse>) => {
				state.orderDetails.isLoading = false;
				state.orderDetails.data = action.payload.order;
			});
	},
});

export const { reset } = orderSlice.actions;
