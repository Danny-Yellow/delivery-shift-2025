import type { DeliveryOption } from '@src/shared/types';

export interface DeliveryProcessingState {
	currentStep: number;
	selectedDeliveryMethod: DeliveryOption | null;
}
