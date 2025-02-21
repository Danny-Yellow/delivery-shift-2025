import type { RootState } from '@src/store';

import { createSelector } from '@reduxjs/toolkit';

export const selectDeliveryMethods = (state: RootState) =>
	state.calculationDelivery.deliveryOptions;

export const selectCurrentStep = (state: RootState) => state.deliveryProcessing.currentStep;

export const selectReceiverAddress = (state: RootState) => state.deliveryProcessing.receiverAddress;

export const selectSenderAddress = (state: RootState) => state.deliveryProcessing.senderAddress;

const selectDeliveryProcessing = (state: RootState) => state.deliveryProcessing;

export const getProcessingDetailsSelector = createSelector(
	[selectDeliveryProcessing],
	(deliveryProcessing) => ({
		receiver: deliveryProcessing.receiver,
		sender: deliveryProcessing.sender,
		receiverAddress: deliveryProcessing.receiverAddress,
		senderAddress: deliveryProcessing.senderAddress,
		option: deliveryProcessing.selectedDeliveryMethod,
		payer: deliveryProcessing.payer,
	}),
);

export const selectPersons = createSelector([selectDeliveryProcessing], (deliveryProcessing) => ({
	receiver: deliveryProcessing.receiver,
	sender: deliveryProcessing.sender,
}));
