export function handleOnlyNumbers(value: string, action: () => void) {
	if (value && /^\d*$/.test(value)) {
		action();
	}
}
