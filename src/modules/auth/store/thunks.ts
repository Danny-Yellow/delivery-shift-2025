import type { Phone } from '@src/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOtp } from '@src/shared/api';

export const createOtpThunk = createAsyncThunk('authSlice/createOtpThunk', (data: Phone) =>
	createOtp({ data }).then((res) => res.data),
);
