import type { OrderWithOption } from '@src/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { createDeliveryOrder } from '@src/shared/api/actions/createDeliveryOrder';
import { getOrders } from '@src/shared/api/entities/orders';

export const createDeliveryOrderThunk = createAsyncThunk(
	'costCalculationSlice/createDeliveryOrderThunk',
	(data: OrderWithOption) => createDeliveryOrder({ data }).then((res) => res.data),
);

export const getOrdersThunk = createAsyncThunk('orderHistorySlice/getOrdersThunk', () =>
	getOrders({}).then((res) => res.data),
);
