
import { createSlice } from '@reduxjs/toolkit';

import type { DeliveryProcessingState } from './types';

const initialState: DeliveryProcessingState = {};

export const deliveryProcessingSlice = createSlice({
	name: 'deliveryProcessing',
	initialState,
	reducers: {},
	// extraReducers: (builder) => {
	// 	builder
	// 		// Способы отправки
	// 		.addCase(calculateDeliveryThunk.pending, (state) => {
	// 			state.deliveryOptions.isLoading = true;
	// 		})
	// 		.addCase(calculateDeliveryThunk.rejected, (state, action) => {
	// 			state.deliveryOptions.isLoading = false;
	// 			state.deliveryOptions.error = action.error.message;
	// 		})
	// 		.addCase(
	// 			calculateDeliveryThunk.fulfilled,
	// 			(state, action: PayloadAction<CalculateDeliveryResponse>) => {
	// 				state.deliveryOptions.isLoading = false;
	// 				state.deliveryOptions.data = action.payload.options;
	// 			},
	// 		);
	// },
});

// export const {} = calculationDeliverySlice.actions;
