import type { Point } from '@src/shared/types';

export interface CalculationDeliveryState {
	selectedReiceiverPoint: Point | null;
	selectedSenderPoint: Point | null;
	points: {
		error: string;
		isLoading: boolean;
		data: Point[];
	};
}
