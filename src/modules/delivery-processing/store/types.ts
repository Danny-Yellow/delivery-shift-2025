import type { DeliveryOption } from '@src/shared/types';

export interface DeliveryProcessingState {
	deliveryOptions: {
		data: DeliveryOption[];
		isLoading: boolean;
		error: string;
	};
}
