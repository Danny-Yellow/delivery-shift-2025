import type { Point } from '@src/shared/types';

export interface CalculationDeliveryState {
	points: {
		error: string;
		isLoading: boolean;
		data: Point[];
	};
}
