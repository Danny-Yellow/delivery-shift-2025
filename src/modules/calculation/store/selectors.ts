import type { RootState } from '@src/store';

export const getPointsSelector = (state: RootState) => state.calculationDelivery.points;

export const getSelectedPoints = (state: RootState) => {
	return {
		reiceiverPoint: state.calculationDelivery.selectedReiceiverPoint,
		senderPoint: state.calculationDelivery.selectedSenderPoint,
	};
};
