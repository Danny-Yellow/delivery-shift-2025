import {
	containsUppercaseNotAtStart,
	stripNonDigits,
	validAlphabeticChars,
	validCyrillicOrLatin,
	validFirstLetterCapitalised,
	validHyphenAndApostrophe,
} from '@src/shared/helpers';
import * as v from 'valibot';

function incorrectFormat(value: string) {
	return ![!containsUppercaseNotAtStart(value), validHyphenAndApostrophe(value)].includes(false);
}

export const userPipes = {
	firstname: v.pipe(
		v.string('Некорректный формат'),
		v.nonEmpty('Поле является обязательным'),
		v.minLength(2, 'Минимальная длина - 2 символа'),
		v.maxLength(60, 'Максимальная длина – 60 символов'),
		v.check(validAlphabeticChars, 'Используются недопустимые символы'),
		v.check(validFirstLetterCapitalised, 'Первая буква должна быть заглавной'),
		v.check(incorrectFormat, 'Некорректный формат'),
		v.check(validCyrillicOrLatin, 'Допустимо использование только одного из алфавитов'),
	),
	lastname: v.pipe(
		v.string('Некорректный формат'),
		v.nonEmpty('Поле является обязательным'),
		v.minLength(2, 'Минимальная длина - 2 символа'),
		v.maxLength(60, 'Максимальная длина – 60 символов'),
		v.check(validAlphabeticChars, 'Используются недопустимые символы'),
		v.check(validFirstLetterCapitalised, 'Первая буква должна быть заглавной'),
		v.check(incorrectFormat, 'Некорректный формат'),
		v.check(validCyrillicOrLatin, 'Допустимо использование только одного из алфавитов'),
	),
	middlename: v.pipe(
		v.string('Некорректный формат'),
		v.maxLength(60, 'Максимальная длина – 60 символов'),
		v.check(validAlphabeticChars, 'Используются недопустимые символы'),
		v.check(validFirstLetterCapitalised, 'Первая буква должна быть заглавной'),
		v.check(incorrectFormat, 'Некорректный формат'),
		v.check(validCyrillicOrLatin, 'Допустимо использование только одного из алфавитов'),
	),
	phone: v.pipe(
		v.string('Некорректный формат'),
		v.transform(stripNonDigits),
		v.nonEmpty('Поле является обязательным'),
		v.length(11, 'Некорректный формат'),
	),
	email: v.pipe(
		v.string('Некорректный формат'),
		v.nonEmpty('Поле является обязательным'),
		v.email('Некорректный формат'),
	),
	city: v.pipe(v.string('Некорректный формат'), v.nonEmpty('Поле является обязательным')),
};
