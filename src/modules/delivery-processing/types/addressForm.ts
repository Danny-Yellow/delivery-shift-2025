import type { Address } from '@src/shared/types/entitites/address';
import type { Field } from '@src/shared/types/features/field';

export interface AddressField extends Field {
	name: keyof Address;
}
