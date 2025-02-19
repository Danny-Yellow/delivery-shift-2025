import type { Address, DeliveryOption, Payer, Person, ReceiverAddress } from '@src/shared/types';

export interface DeliveryProcessingState {
	currentStep: number;
	payer: Payer | null;
	receiver: Person | null;
	receiverAddress: ReceiverAddress | null;
	selectedDeliveryMethod: DeliveryOption | null;
	sender: Person | null;
	senderAddress: Address | null;
}
