import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPoints } from '@src/shared/api';

export const getPointsThunk = createAsyncThunk(
	'costCalculationSlice/getPackageTypesAction',
	async () => getPoints({}).then((res) => res.data),
);
