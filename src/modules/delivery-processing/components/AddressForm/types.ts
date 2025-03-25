import type { Address, ReceiverAddress } from '@src/shared/types';

interface ReceiverAddressFormProps {
	variant: 'receiver';
	onSubmit: (value: ReceiverAddress) => void;
}

interface SenderAddressFormProps {
	variant: 'sender';
	onSubmit: (value: Address) => void;
}

export type AddressFormProps = ReceiverAddressFormProps | SenderAddressFormProps;
