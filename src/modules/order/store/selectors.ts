import type { RootState } from '@src/store';

export const selectOrderRequest = (state: RootState) => state.order.orderRequest;

export const selectOrderHistory = (state: RootState) => state.order.orderHistory;

export const selectOrderHistoryData = (state: RootState) => state.order.orderHistory.data;

export const selectOrderDetails = (state: RootState) => state.order.orderDetails;
