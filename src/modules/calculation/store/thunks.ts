import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPoints } from '@src/shared/api';
import { getPackageTypes } from '@src/shared/api/entities/packageTypes';

export const getPointsThunk = createAsyncThunk('costCalculationSlice/getPointsThunk', () =>
	getPoints({}).then((res) => res.data),
);

export const getPackageTypesThunk = createAsyncThunk(
	'costCalculationSlice/getPackageTypesThunk',
	() => getPackageTypes({}).then((res) => res.data),
);
