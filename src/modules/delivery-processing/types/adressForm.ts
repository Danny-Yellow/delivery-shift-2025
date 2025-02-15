import type { Adress } from '@src/shared/types/entitites/adress';
import type { Field } from '@src/shared/types/features/field';

export interface AdressField extends Field {
	name: keyof Adress;
}
