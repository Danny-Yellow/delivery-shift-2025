import type { DeliveryInfo } from '@src/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPoints } from '@src/shared/api';
import { calculateDelivery } from '@src/shared/api/actions/calculateDelivery';
import { getPackageTypes } from '@src/shared/api/entities/packageTypes';

export const getPointsThunk = createAsyncThunk('costCalculationSlice/getPointsThunk', () =>
	getPoints({}).then((res) => res.data),
);

export const getPackageTypesThunk = createAsyncThunk(
	'costCalculationSlice/getPackageTypesThunk',
	() => getPackageTypes({}).then((res) => res.data),
);

export const calculateDeliveryThunk = createAsyncThunk(
	'costCalculationSlice/calculateDeliveryThunk',
	(data: DeliveryInfo) => calculateDelivery({ data }).then((res) => res.data),
);
