import { cyrillicRegex, latinRegex, nonAlphabeticCharsRegex } from '@src/shared/constants/regExp';

export function validCyrillicOrLatin(value: string) {
	if (!value) return true;
	return cyrillicRegex.test(value) || latinRegex.test(value);
}

export function validFirstLetterCapitalised(value: string) {
	if (!value) return true;
	return value[0] === value[0].toUpperCase();
}

export function validAlphabeticChars(value: string) {
	if (!value) return true;
	return !value.match(nonAlphabeticCharsRegex);
}

export function validHyphenAndApostrophe(value: string) {
	if (!value) return true;
	return !/(['-]).*?\1|^['-]|['-]$/.test(value);
}

export function containsUppercaseNotAtStart(value: string) {
	return /.[A-ZА-Я]/.test(value);
}
