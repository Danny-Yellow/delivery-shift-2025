import type { PayloadAction } from '@reduxjs/toolkit';
import type { Address, DeliveryOption, Payer, Person, ReceiverAddress } from '@src/shared/types';

import { createSlice } from '@reduxjs/toolkit';

import type { DeliveryProcessingState } from './types';

const initialState: DeliveryProcessingState = {
	currentStep: 1,
	selectedDeliveryMethod: null,
	receiver: null,
	sender: null,
	receiverAddress: null,
	senderAddress: null,
	payer: null,
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
		setReceiverAddress: (state, { payload }: PayloadAction<ReceiverAddress>) => {
			state.receiverAddress = payload;
		},
		setSenderAddress: (state, { payload }: PayloadAction<Address>) => {
			state.senderAddress = payload;
		},
		setPayer: (state, { payload }: PayloadAction<Payer>) => {
			state.payer = payload;
		},
		setStep: (state, { payload }: PayloadAction<number>) => {
			state.currentStep = payload;
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
	setReceiverAddress,
	setSenderAddress,
	setPayer,
	setStep,
	reset,
} = deliveryProcessingSlice.actions;
