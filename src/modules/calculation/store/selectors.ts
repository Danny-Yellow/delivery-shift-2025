import type { RootState } from '@src/store';

export const getPointsSelector = (state: RootState) => state.calculationDelivery.points;
