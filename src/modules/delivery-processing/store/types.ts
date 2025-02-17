import type { Adress, DeliveryOption, Payer, Person, ReceiverAdress } from '@src/shared/types';

export interface DeliveryProcessingState {
	currentStep: number;
	payer: Payer | null;
	receiver: Person | null;
	receiverAdress: ReceiverAdress | null;
	selectedDeliveryMethod: DeliveryOption | null;
	sender: Person | null;
	senderAdress: Adress | null;
}
