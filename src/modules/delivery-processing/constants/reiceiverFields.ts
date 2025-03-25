import type { ReceiverField } from '../types/receiverForm';

export const personalFields: ReceiverField[] = [
	{
		label: 'Фамилия',
		placeholder: 'Фамилия',
		name: 'firstname',
	},
	{
		label: 'Имя',
		placeholder: 'Имя',
		name: 'lastname',
	},
	{
		label: 'Отчество',
		placeholder: 'Отчество (при наличии)',
		name: 'middlename',
	},
	{
		label: 'Номер телефона',
		placeholder: 'Телефон',
		name: 'phone',
	},
];
