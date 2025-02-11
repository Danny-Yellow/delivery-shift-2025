
import {
	useDispatch as dispatchHook,
	useSelector as selectorHook,
	useStore as storeHook,
} from 'react-redux';

import type { AppDispatch, AppStore, RootState } from './store';

export const useDispatch = dispatchHook.withTypes<AppDispatch>();
export const useSelector = selectorHook.withTypes<RootState>();
export const useStore = storeHook.withTypes<AppStore>();
