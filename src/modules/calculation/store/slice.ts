import type { PayloadAction } from '@reduxjs/toolkit';
import type { GetPointsResponse } from '@src/shared/api';

import { createSlice } from '@reduxjs/toolkit';

import type { CalculationDeliveryState } from './types';

import { getPointsThunk } from './thunks';

const initialState: CalculationDeliveryState = {
	selectedReiceiverPoint: null,
	selectedSenderPoint: null,
	points: {
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
	},
	extraReducers: (builder) => {
		builder
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
			});
	},
});

export const { changeSelectedSenderPoint, changeSelectedReiceiverPoint } =
	calculationDeliverySlice.actions;
