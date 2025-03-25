import { formatPhone } from '@src/shared/helpers';
import * as v from 'valibot';

export const AddressFormSchema = v.object({
	phone: v.pipe(
		v.string('Строка'),
		v.transform(formatPhone),
		v.nonEmpty('Поле является обязательным'),
		v.length(11, 'Некорректный формат'),
	),
});
