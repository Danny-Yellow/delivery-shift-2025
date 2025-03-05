import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOrders } from '@src/shared/api/entities/orders';

export const getOrdersThunk = createAsyncThunk('orderHistorySlice/getOrdersThunk', () =>
	getOrders({}).then((res) => res.data),
);
