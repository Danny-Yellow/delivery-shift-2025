import type { RootState } from '@src/store/types';

export const selectPoints = (state: RootState) => state.calculationDelivery.points;

export const selectSelectedPoints = (state: RootState) => {
	return {
		receiverPoint: state.calculationDelivery.selectedReiceiverPoint,
		senderPoint: state.calculationDelivery.selectedSenderPoint,
	};
};

export const selectPackageTypes = (state: RootState) => state.calculationDelivery.packageTypes;

export const selectSelectedPackageType = (state: RootState) =>
	state.calculationDelivery.selectedPackageType;

export const selectIsOpenPackageType = (state: RootState) =>
	state.calculationDelivery.isOpenPackageType;
