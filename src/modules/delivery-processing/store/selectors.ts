import type { RootState } from '@src/store';

export const getDeliveryMethodsSelector = (state: RootState) =>
	state.calculationDelivery.deliveryOptions;
