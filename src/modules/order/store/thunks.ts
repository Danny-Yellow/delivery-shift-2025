import type { OrderWithOption } from '@src/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { cancelOrder } from '@src/shared/api/actions/cancelOrder';
import { createDeliveryOrder } from '@src/shared/api/actions/createDeliveryOrder';
import { getOrder, getOrders } from '@src/shared/api/entities/orders';

export const createDeliveryOrderThunk = createAsyncThunk(
	'costCalculationSlice/createDeliveryOrderThunk',
	(data: OrderWithOption) => createDeliveryOrder({ data }).then((res) => res.data),
);

export const getOrdersThunk = createAsyncThunk('order/getOrdersThunk', () =>
	getOrders({}).then((res) => res.data),
);

export const getOrderThunk = createAsyncThunk('order/getOrderThunk', (id: string) =>
	getOrder({ data: { id } }).then((res) => res.data),
);

export const cancelOrderThunk = createAsyncThunk('order/cancelOrderThunk', (id: string) =>
	cancelOrder({ data: { orderId: id } }).then((res) => res.data),
);
