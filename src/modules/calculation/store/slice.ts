import type { PayloadAction } from '@reduxjs/toolkit';
import type { GetPointsResponse } from '@src/shared/api';
import type { GetPackageTypesResponse } from '@src/shared/api/entities/packageTypes';

import { createSlice } from '@reduxjs/toolkit';

import type { CalculationDeliveryState } from './types';

import { getPackageTypesThunk, getPointsThunk } from './thunks';

const initialState: CalculationDeliveryState = {
	selectedReiceiverPoint: null,
	selectedSenderPoint: null,
	selectedPackageType: null,
	points: {
		isLoading: false,
		error: '',
		data: [],
	},
	packageTypes: {
		isLoading: false,
		error: '',
		data: [],
	},
};

export const calculationDeliverySlice = createSlice({
	name: 'calculationDelivery',
	initialState,
	reducers: {
		changeSelectedSenderPoint: (state, { payload }: PayloadAction<{ pointId: string }>) => {
			const selectedPoint = state.points.data.find((point) => point.id === payload.pointId);
			state.selectedSenderPoint = selectedPoint;
		},
		changeSelectedReiceiverPoint: (state, { payload }: PayloadAction<{ pointId: string }>) => {
			const selectedPoint = state.points.data.find((point) => point.id === payload.pointId);
			state.selectedReiceiverPoint = selectedPoint;
		},
		changeSelectedPackageType: (state, { payload }: PayloadAction<{ packageTypeId: string }>) => {
			const selectedPackageType = state.packageTypes.data.find(
				(packageType) => packageType.id === payload.packageTypeId,
			);
			state.selectedPackageType = selectedPackageType;
		},
	},
	extraReducers: (builder) => {
		builder
			// Точки получения/отправки
			.addCase(getPointsThunk.pending, (state) => {
				state.points.isLoading = true;
			})
			.addCase(getPointsThunk.rejected, (state, action) => {
				state.points.isLoading = false;
				state.points.error = action.error.message;
			})
			.addCase(getPointsThunk.fulfilled, (state, action: PayloadAction<GetPointsResponse>) => {
				state.points.isLoading = false;
				state.points.data = action.payload.points;
			})
			// Типы упаковок
			.addCase(getPackageTypesThunk.pending, (state) => {
				state.packageTypes.isLoading = true;
			})
			.addCase(getPackageTypesThunk.rejected, (state, action) => {
				state.packageTypes.isLoading = false;
				state.packageTypes.error = action.error.message;
			})
			.addCase(
				getPackageTypesThunk.fulfilled,
				(state, action: PayloadAction<GetPackageTypesResponse>) => {
					state.packageTypes.isLoading = false;
					state.packageTypes.data = action.payload.packages;
				},
			);
	},
});

export const {
	changeSelectedSenderPoint,
	changeSelectedReiceiverPoint,
	changeSelectedPackageType,
} = calculationDeliverySlice.actions;
