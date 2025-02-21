import type { Address, ReceiverAddress } from './address';
import type { DeliveryOption } from './deliveryOption';
import type { Payer } from './payer';
import type { Point } from './point';
import type { Person } from './receiver';

interface baseOrder {
	payer: Payer;
	receiver: Person;
	receiverAddress: ReceiverAddress;
	receiverPoint: Point;
	sender: Person;
	senderAddress: Address;
	senderPoint: Point;
}

export interface OrderWithOption extends baseOrder {
	option: DeliveryOption;
}

export interface OrderWithStatus extends baseOrder {
	_id: string;
	cancellable: boolean;
	status: number;
}
