import type { RootState } from '@src/store';

import { createSelector } from '@reduxjs/toolkit';

export const getDeliveryMethodsSelector = (state: RootState) =>
	state.calculationDelivery.deliveryOptions;

export const getCurrentStepSelector = (state: RootState) => state.deliveryProcessing.currentStep;

export const getReceiverAddressSelector = (state: RootState) =>
	state.deliveryProcessing.receiverAddress;

export const getSenderAddressSelector = (state: RootState) =>
	state.deliveryProcessing.senderAddress;

const getDeliveryProcessingSelector = (state: RootState) => state.deliveryProcessing;

export const getProcessingDetailsSelector = createSelector(
	[getDeliveryProcessingSelector],
	(deliveryProcessing) => ({
		receiver: deliveryProcessing.receiver,
		sender: deliveryProcessing.sender,
		receiverAddress: deliveryProcessing.receiverAddress,
		senderAddress: deliveryProcessing.senderAddress,
		option: deliveryProcessing.selectedDeliveryMethod,
		payer: deliveryProcessing.payer,
	}),
);

export const getPersonsSelector = createSelector(
	[getDeliveryProcessingSelector],
	(deliveryProcessing) => ({
		receiver: deliveryProcessing.receiver,
		sender: deliveryProcessing.sender,
	}),
);
