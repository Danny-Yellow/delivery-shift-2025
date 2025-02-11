import { combineReducers } from '@reduxjs/toolkit';
import { calculationDeliverySlice } from '@src/modules/calculation/store/slice';

export const rootReducer = combineReducers({
	calculationDelivery: calculationDeliverySlice.reducer,
});
