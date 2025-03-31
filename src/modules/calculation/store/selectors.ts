import type { RootState } from '@src/store';

import { createSelector } from '@reduxjs/toolkit';

const selectCalculationDelivery = (state: RootState) => state.calculationDelivery;

export const selectSelectedPoints = createSelector(
	[selectCalculationDelivery],
	(calculationDelivery) => ({
		receiverPoint: calculationDelivery.selectedReiceiverPoint,
		senderPoint: calculationDelivery.selectedSenderPoint,
	}),
);

export const selectPackageTypes = (state: RootState) => state.calculationDelivery.packageTypes;

export const selectSelectedPackageType = (state: RootState) =>
	state.calculationDelivery.selectedPackageType;

export const selectIsOpenPackageType = (state: RootState) =>
	state.calculationDelivery.isOpenPackageType;

export const selectDeliveryOptions = (state: RootState) =>
	state.calculationDelivery.deliveryOptions;
