import type { RootState } from '@src/store/types';

export const selectPhone = (state: RootState) => state.auth.phone;

export const selectRetryDelay = (state: RootState) => state.auth.retryDelay;

export const selectIsContinued = (state: RootState) => state.auth.isContinued;
