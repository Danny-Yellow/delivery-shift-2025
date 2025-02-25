import type { PayloadAction } from '@reduxjs/toolkit';
import type { CreateOtpResponse } from '@src/shared/api';

import { createSlice } from '@reduxjs/toolkit';

import type { AuthState } from './types';

import { createOtpThunk } from './thunks';

const initialState: AuthState = {
	code: null,
	phone: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createOtpThunk.pending, (state) => {
				state.code.isLoading = true;
			})
			.addCase(createOtpThunk.rejected, (state, action) => {
				state.code.isLoading = false;
				state.code.error = action.error.message ?? '';
			})
			.addCase(createOtpThunk.fulfilled, (state, action: PayloadAction<CreateOtpResponse>) => {
				state.code.isLoading = false;
				state.code.data = action.payload.retryDelay;
			});
	},
});

export const { reset } = authSlice.actions;
