import type { Adress, ReceiverAdress } from '@src/shared/types';

interface ReceiverAdressFormProps {
	variant: 'receiver';
	onSubmit: (value: ReceiverAdress) => void;
}

interface SenderAdressFormProps {
	variant: 'sender';
	onSubmit: (value: Adress) => void;
}

export type AdressFormProps = ReceiverAdressFormProps | SenderAdressFormProps;
