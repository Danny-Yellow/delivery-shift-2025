import { stripNonDigits } from '../../stripNonDigits/stripNonDigits';

export function validPhone(value: string) {
	return stripNonDigits(value).length === 11;
}
