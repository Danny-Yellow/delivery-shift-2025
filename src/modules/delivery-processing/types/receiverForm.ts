import type { Person } from '@src/shared/types';

export interface ReceiverField {
	label: string;
	name: keyof Person;
	placeholder: string;
}
