import type { RootState } from '@src/store';

export const getDeliveryMethodsSelector = (state: RootState) =>
	state.calculationDelivery.deliveryOptions;

export const getCurrentStep = (state: RootState) => state.deliveryProcessing.currentStep;
