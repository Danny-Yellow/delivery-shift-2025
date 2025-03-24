export function handleOnlyNumbers(value: string, action: () => void) {
	if (/^\d*$/.test(value)) action();
}
