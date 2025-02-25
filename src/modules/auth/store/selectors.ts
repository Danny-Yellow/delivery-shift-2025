import type { RootState } from '@src/store';

export const selectPhone = (state: RootState) => state.auth.phone;

export const selectCode = (state: RootState) => state.auth.code;
