import { cyrillicRegex, invalidCharsRegex, latinRegex } from '@src/shared/constants/regExp';

export function validCyrillicOrLatin(value: string) {
	if (!value) return true;
	return cyrillicRegex.test(value) || latinRegex.test(value);
}

export function validFirstLetterCapitalised(value: string) {
	if (!value) return true;
	return value[0] === value[0].toUpperCase();
}

export function validInvalidChars(value: string) {
	if (!value) return true;
	return !value.match(invalidCharsRegex);
}

export function validHyphenAndApostrophe(value: string) {
	if (!value) return true;
	return !/(['-]).*?\1|^['-]|['-]$/.test(value);
}

export function containsUppercaseNotAtStart(value: string) {
	return /.[A-ZА-Я]/.test(value);
}
