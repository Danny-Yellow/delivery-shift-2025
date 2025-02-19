import { validHouseOrApartament, validStreet } from '@src/shared/helpers';
import * as v from 'valibot';

export const AddressFormSchema = v.object({
	street: v.pipe(
		v.string('Некорректный формат'),
		v.nonEmpty('Поле является обязательным'),
		v.minLength(2, 'Минимальная длина - 2 символа'),
		v.maxLength(100, 'Максимальная длина – 100 символов'),
		v.check(validStreet, 'Некорректный формат'),
	),
	house: v.pipe(
		v.string('Некорректный формат'),
		v.nonEmpty('Поле является обязательным'),
		v.maxLength(30, 'Максимальная длина – 30 символов'),
		v.check(validHouseOrApartament, 'Некорректный формат'),
	),
	apartment: v.pipe(
		v.string('Некорректный формат'),
		v.nonEmpty('Поле является обязательным'),
		v.maxLength(30, 'Максимальная длина – 30 символов'),
		v.check(validHouseOrApartament, 'Некорректный формат'),
	),
	comment: v.pipe(
		v.string('Некорректный формат'),
		v.maxLength(200, 'Максимальная длина – 200 символов'),
	),
});
