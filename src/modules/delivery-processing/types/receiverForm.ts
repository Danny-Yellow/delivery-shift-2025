import type { Field, Person } from '@src/shared/types';

export interface ReceiverField extends Field {
	name: keyof Person;
}
