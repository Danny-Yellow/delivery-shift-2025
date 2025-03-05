import type { RootState } from '@src/store';

export const selectOrderHistory = (state: RootState) => state.orderHistory;

export const selectOrderHistoryData = (state: RootState) => state.orderHistory.data;
