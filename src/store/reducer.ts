import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '@src/modules/auth/store';
import { calculationDeliverySlice } from '@src/modules/calculation/store/slice';
import { deliveryProcessingSlice } from '@src/modules/delivery-processing/store';
import { orderSlice } from '@src/modules/order/store';

export const rootReducer = combineReducers({
	calculationDelivery: calculationDeliverySlice.reducer,
	deliveryProcessing: deliveryProcessingSlice.reducer,
	order: orderSlice.reducer,
	auth: authSlice.reducer,
});
