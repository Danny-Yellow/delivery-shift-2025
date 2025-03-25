import type { PayloadAction } from '@reduxjs/toolkit';
import type { CreateOtpResponse } from '@src/shared/api';

import { createSlice } from '@reduxjs/toolkit';

import type { AuthState } from './types';

import { createOtpThunk } from './thunks';

const initialState: AuthState = {
	retryDelay: {
		data: null,
		error: '',
		isLoading: false,
	},
	phone: null,
	isContinued: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setPhone: (state, { payload }: PayloadAction<string>) => {
			state.phone = payload;
		},
		setIsContinued: (state, { payload }: PayloadAction<boolean>) => {
			state.isContinued = payload;
		},
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createOtpThunk.pending, (state) => {
				state.retryDelay.isLoading = true;
			})
			.addCase(createOtpThunk.rejected, (state, action) => {
				state.retryDelay.isLoading = false;
				state.retryDelay.error = action.error.message ?? '';
			})
			.addCase(createOtpThunk.fulfilled, (state, action: PayloadAction<CreateOtpResponse>) => {
				state.retryDelay.isLoading = false;
				state.isContinued = true;
				state.retryDelay.data = action.payload.retryDelay;
			});
	},
});

export const { setPhone, setIsContinued, reset } = authSlice.actions;
