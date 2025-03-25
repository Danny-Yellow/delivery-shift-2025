import type { PayloadAction } from '@reduxjs/toolkit';
import type { CreateDeliveryOrderResponse } from '@src/shared/api/actions/createDeliveryOrder';
import type { GetOrderResponse, GetOrdersResponse } from '@src/shared/api/entities/orders';

import { createSlice } from '@reduxjs/toolkit';

import type { OrderState } from './types';

import {
	cancelOrderThunk,
	createDeliveryOrderThunk,
	getOrdersThunk,
	getOrderThunk,
} from './thunks';

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
	cancelOrder: {
		isLoading: false,
		error: '',
		isSuccess: null,
	},
	cancelOrderModal: {
		isOpen: false,
	},
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		openModal: (state) => {
			state.cancelOrderModal.isOpen = true;
		},
		closeModal: (state) => {
			state.cancelOrderModal.isOpen = false;
		},
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
			})
			// Cancel order
			.addCase(cancelOrderThunk.pending, (state) => {
				state.cancelOrder.isSuccess = null;
				state.cancelOrder.isLoading = true;
			})
			.addCase(cancelOrderThunk.rejected, (state, action) => {
				state.cancelOrder.isLoading = false;
				state.cancelOrder.isSuccess = false;
				state.cancelOrder.error = action.error.message ?? '';
			})
			.addCase(cancelOrderThunk.fulfilled, (state, action: PayloadAction<DefaultResponse>) => {
				state.cancelOrder.isLoading = false;
				state.cancelOrder.isSuccess = action.payload.success;
			});
	},
});

export const { reset, openModal, closeModal } = orderSlice.actions;
