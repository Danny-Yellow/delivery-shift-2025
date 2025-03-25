import type { AddressField } from '../types/addressForm';

export const addressFields: AddressField[] = [
	{
		label: 'Улица',
		placeholder: 'Улица',
		name: 'street',
	},
	{
		label: 'Номер дома',
		placeholder: 'Дом',
		name: 'house',
		format: 'д. ',
	},
	{
		label: 'Номер квартиры',
		placeholder: 'Квартира',
		name: 'apartment',
		format: 'кв. ',
	},
	{
		label: 'Заметка',
		placeholder: 'Заметка для курьера',
		name: 'comment',
	},
];
