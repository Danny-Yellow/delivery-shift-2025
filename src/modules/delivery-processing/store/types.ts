import type { Adress, AdressWithOptions, DeliveryOption, Person } from '@src/shared/types';

export interface DeliveryProcessingState {
	currentStep: number;
	receiver: Person | null;
	receiverAdress: AdressWithOptions | null;
	selectedDeliveryMethod: DeliveryOption | null;
	sender: Person | null;
	senderAdress: Adress | null;
}
