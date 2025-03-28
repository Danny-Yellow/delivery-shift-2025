import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducer';

export const store = configureStore({
	reducer: rootReducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
