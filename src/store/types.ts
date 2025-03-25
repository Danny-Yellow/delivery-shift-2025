import type { rootReducer } from './reducer';
import type { store } from './store';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
