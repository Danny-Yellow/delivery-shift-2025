import type { Point } from '@src/shared/types';

export interface PointsState {
	data: Point[];
	error: string;
	isLoading: boolean;
}
