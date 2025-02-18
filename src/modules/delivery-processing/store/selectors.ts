import type { RootState } from '@src/store';

import { createSelector } from '@reduxjs/toolkit';

export const getDeliveryMethodsSelector = (state: RootState) =>
	state.calculationDelivery.deliveryOptions;

export const getCurrentStepSelector = (state: RootState) => state.deliveryProcessing.currentStep;

const getDeliveryProcessingSelector = (state: RootState) => state.deliveryProcessing;

export const getOrderDetailsSelector = createSelector(
	[getDeliveryProcessingSelector],
	(deliveryProcessing) => ({
		receiver: deliveryProcessing.receiver,
		sender: deliveryProcessing.sender,
		receiverAdress: deliveryProcessing.receiverAdress,
		senderAdress: deliveryProcessing.senderAdress,
		method: deliveryProcessing.selectedDeliveryMethod,
	}),
);
