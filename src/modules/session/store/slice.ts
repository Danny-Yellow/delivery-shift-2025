import type { PayloadAction } from '@reduxjs/toolkit';
import type { SigninResponse } from '@src/shared/api';

import { createSlice } from '@reduxjs/toolkit';

import type { SessionState } from './types';

import { signinThunk } from './thunks';

const initialState: SessionState = {
	isAuth: false,
	user: {
		phone: '',
		firstname: '',
		middlename: '',
		lastname: '',
		email: '',
		city: '',
	},
	signin: {
		error: '',
		isLoading: false,
	},
};

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(signinThunk.pending, (state) => {
				state.signin.isLoading = true;
			})
			.addCase(signinThunk.rejected, (state, action) => {
				state.signin.isLoading = false;
				state.signin.error = action.error.message ?? '';
			})
			.addCase(signinThunk.fulfilled, (state, action: PayloadAction<SigninResponse>) => {
				state.signin.isLoading = false;
				state.isAuth = true;
				state.user = action.payload.user;
			});
	},
});

export const { reset } = sessionSlice.actions;
