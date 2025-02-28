import type { Signin } from '@src/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSession, signin } from '@src/shared/api';

export const signinThunk = createAsyncThunk('sessionSlice/signinThunk', (data: Signin) =>
	signin({ data }).then((res) => res.data),
);

export const getSessionThunk = createAsyncThunk('sessionSlice/getSessionThunk', () =>
	getSession({}).then((res) => res.data),
);
