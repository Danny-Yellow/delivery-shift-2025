import type { IndicatorColor } from '../ui';

export const STATUS_CODE = {
	0: 'Создан',
	1: 'Вручен',
	2: 'Отправлен',
	3: 'В пути',
	4: 'Доставлен',
};

export const STATUS_INDICATOR: Record<number, IndicatorColor> = {
	0: 'attention',
	1: 'success',
	2: 'attention',
	3: 'attention',
	4: 'success',
};
