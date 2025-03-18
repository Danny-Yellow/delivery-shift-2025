import type { PayloadAction } from '@reduxjs/toolkit';
import type { GetSessionResponse, SigninResponse } from '@src/shared/api';

import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS } from '@src/shared/constants/localStorage';

import type { SessionState } from './types';

import { getSessionThunk, signinThunk } from './thunks';

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
	session: {
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
			// Signin
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
				localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, action.payload.token);
			})
			// Get session
			.addCase(getSessionThunk.pending, (state) => {
				state.session.isLoading = true;
			})
			.addCase(getSessionThunk.rejected, (state, action) => {
				state.session.isLoading = false;
				state.session.error = action.error.message ?? '';
			})
			.addCase(getSessionThunk.fulfilled, (state, action: PayloadAction<GetSessionResponse>) => {
				const user = action.payload.user;

				state.session.isLoading = false;
				state.isAuth = true;
				state.user = {
					city: user.city ?? '',
					email: user.email ?? '',
					firstname: user.firstname ?? '',
					lastname: user.lastname ?? '',
					middlename: user.middlename ?? '',
					phone: user.phone ?? '',
				};
			});
	},
});

export const { reset } = sessionSlice.actions;
