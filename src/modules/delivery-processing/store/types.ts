import type { Adress, DeliveryOption, Person, ReceiverAdress } from '@src/shared/types';

export interface DeliveryProcessingState {
	currentStep: number;
	receiver: Person | null;
	receiverAdress: ReceiverAdress | null;
	selectedDeliveryMethod: DeliveryOption | null;
	sender: Person | null;
	senderAdress: Adress | null;
}
