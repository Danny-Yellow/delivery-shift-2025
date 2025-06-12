export function stripNonDigits(value: string) {
	return value.replace(/\D/g, '');
}
