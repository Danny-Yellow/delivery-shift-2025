import type { DeliveryOption, Person } from '@src/shared/types';

export interface DeliveryProcessingState {
	currentStep: number;
	receiver: Person | null;
	selectedDeliveryMethod: DeliveryOption | null;
}
