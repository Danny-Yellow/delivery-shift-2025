import type { RootState } from '@src/store';

export const getPointsSelector = (state: RootState) => state.calculationDelivery.points;

export const getSelectedPointsSelector = (state: RootState) => {
	return {
		reiceiverPoint: state.calculationDelivery.selectedReiceiverPoint,
		senderPoint: state.calculationDelivery.selectedSenderPoint,
	};
};

export const getPackageTypesSelector = (state: RootState) => state.calculationDelivery.packageTypes;

export const getSelectedPackageTypeSelector = (state: RootState) =>
	state.calculationDelivery.selectedPackageType;

export const getIsOpenPackageTypeSelector = (state: RootState) =>
	state.calculationDelivery.isOpenPackageType;
