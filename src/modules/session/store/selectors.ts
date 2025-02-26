import type { RootState } from '@src/store';

export const selectUser = (state: RootState) => state.session.user;

export const selectIsAuth = (state: RootState) => state.session.isAuth;

export const selectSignin = (state: RootState) => state.session.signin;
