import type { OrderWithOption } from '@src/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { createDeliveryOrder } from '@src/shared/api/actions/createDeliveryOrder';

export const createDeliveryOrderThunk = createAsyncThunk(
	'costCalculationSlice/createDeliveryOrderThunk',
	(data: OrderWithOption) => createDeliveryOrder({ data }).then((res) => res.data),
);
