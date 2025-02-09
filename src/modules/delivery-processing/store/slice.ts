import type { PayloadAction } from '@reduxjs/toolkit';
import type { CalculateDeliveryResponse } from '@src/shared/api/actions/calculateDelivery';

import { createSlice } from '@reduxjs/toolkit';

import type { DeliveryProcessingState } from './types';

import { calculateDeliveryThunk } from './thunks';

const initialState: DeliveryProcessingState = {
	deliveryOptions: {
		isLoading: false,
		error: '',
		data: [],
	},
};

export const deliveryProcessingSlice = createSlice({
	name: 'deliveryProcessing',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Способы отправки
			.addCase(calculateDeliveryThunk.pending, (state) => {
				state.deliveryOptions.isLoading = true;
			})
			.addCase(calculateDeliveryThunk.rejected, (state, action) => {
				state.deliveryOptions.isLoading = false;
				state.deliveryOptions.error = action.error.message;
			})
			.addCase(
				calculateDeliveryThunk.fulfilled,
				(state, action: PayloadAction<CalculateDeliveryResponse>) => {
					state.deliveryOptions.isLoading = false;
					state.deliveryOptions.data = action.payload.options;
				},
			);
	},
});

// export const {} = calculationDeliverySlice.actions;
