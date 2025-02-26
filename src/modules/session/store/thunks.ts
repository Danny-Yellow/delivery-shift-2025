import type { Signin } from '@src/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { signin } from '@src/shared/api';

export const signinThunk = createAsyncThunk('sessionSlice/signinThunk', (data: Signin) =>
	signin({ data }).then((res) => res.data),
);
