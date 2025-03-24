import type { PayloadAction } from '@reduxjs/toolkit';
import type { GetPointsResponse } from '@src/shared/api';

import { createSlice } from '@reduxjs/toolkit';

import type { PointsState } from './types';

import { getPointsThunk } from './thunks';

const initialState: PointsState = {
	isLoading: false,
	error: '',
	data: [],
};

export const pointsSlice = createSlice({
	name: 'points',
	initialState,
	extraReducers: (builder) => {
		builder
			// Точки получения/отправки
			.addCase(getPointsThunk.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPointsThunk.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message ?? '';
			})
			.addCase(getPointsThunk.fulfilled, (state, action: PayloadAction<GetPointsResponse>) => {
				state.isLoading = false;
				state.data = action.payload.points;
			});
	},
	reducers: {},
});
