import type { Field, Person } from '@src/shared/types';

export interface ProfileField extends Field {
	name: 'city' | 'email' | keyof Person;
}
