import type { PayloadAction } from '@reduxjs/toolkit';
import type { Adress, DeliveryOption, Person, ReceiverAdress } from '@src/shared/types';

import { createSlice } from '@reduxjs/toolkit';

import type { DeliveryProcessingState } from './types';

const initialState: DeliveryProcessingState = {
	currentStep: 5,
	selectedDeliveryMethod: null,
	receiver: null,
	sender: null,
	receiverAdress: null,
	senderAdress: null,
};

export const deliveryProcessingSlice = createSlice({
	name: 'deliveryProcessing',
	initialState,
	reducers: {
		setDeliveryMethod: (state, { payload }: PayloadAction<DeliveryOption>) => {
			state.selectedDeliveryMethod = payload;
		},
		incrementStep: (state) => {
			state.currentStep += 1;
		},
		decrementStep: (state) => {
			state.currentStep -= 1;
		},
		setReceiver: (state, { payload }: PayloadAction<Person>) => {
			state.receiver = payload;
		},
		setSender: (state, { payload }: PayloadAction<Person>) => {
			state.sender = payload;
		},
		setReceiverAdress: (state, { payload }: PayloadAction<ReceiverAdress>) => {
			state.receiverAdress = payload;
		},
		setSenderAdress: (state, { payload }: PayloadAction<Adress>) => {
			state.senderAdress = payload;
		},
		reset: () => initialState,
	},
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

export const {
	setDeliveryMethod,
	incrementStep,
	setReceiver,
	decrementStep,
	setSender,
	setReceiverAdress,
	setSenderAdress,
	reset,
} = deliveryProcessingSlice.actions;
