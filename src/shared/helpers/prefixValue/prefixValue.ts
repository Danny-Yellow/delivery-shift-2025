export function prefixValue(prefix: string, value: string) {
	if (value.length === 1) {
		return `${prefix}${value}`;
	}

	if (value === prefix) return '';

	return value;
}
