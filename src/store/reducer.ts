import { combineReducers } from '@reduxjs/toolkit';
import { calculationDeliverySlice } from '@src/modules/calculation/store/slice';
import { deliveryProcessingSlice } from '@src/modules/delivery-processing/store';

export const rootReducer = combineReducers({
	calculationDelivery: calculationDeliverySlice.reducer,
	deliveryProcessing: deliveryProcessingSlice.reducer,
});
