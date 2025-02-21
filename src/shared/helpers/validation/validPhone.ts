import { formatPhone } from '../format/formatPhone';

export function validPhone(value: string) {
	return formatPhone(value).length === 11;
}
