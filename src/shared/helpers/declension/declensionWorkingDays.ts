import { declension } from './declension';

export function declensionWorkingDays(value: number) {
	return declension(value, ['рабочий день', 'рабочих дня', 'рабочих дней']);
}
