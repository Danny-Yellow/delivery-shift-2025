import {
	containsUppercaseNotAtStart,
	validAlphabeticChars,
	validCyrillicOrLatin,
	validFirstLetterCapitalised,
	validHyphenAndApostrophe,
} from './validStrings';

describe('validCyrillicOrLatin', () => {
	it('accepts cyrillic or latin text', () => {
		expect(validCyrillicOrLatin('Иван')).toBe(true);
		expect(validCyrillicOrLatin('John')).toBe(true);
		expect(validCyrillicOrLatin('')).toBe(true);
	});

	it('rejects text with other characters', () => {
		expect(validCyrillicOrLatin('123')).toBe(false);
		expect(validCyrillicOrLatin('!@#')).toBe(false);
		expect(validCyrillicOrLatin('Иван123')).toBe(false);
	});
});

describe('validFirstLetterCapitalised', () => {
	it('accepts text with capital first letter', () => {
		expect(validFirstLetterCapitalised('Иван')).toBe(true);
		expect(validFirstLetterCapitalised('John')).toBe(true);
		expect(validFirstLetterCapitalised('')).toBe(true);
	});

	it('rejects text with lowercase first letter', () => {
		expect(validFirstLetterCapitalised('иван')).toBe(false);
		expect(validFirstLetterCapitalised('john')).toBe(false);
	});
});

describe('validAlphabeticChars', () => {
	it('accepts text without invalid characters', () => {
		expect(validAlphabeticChars('Иван')).toBe(true);
		expect(validAlphabeticChars('John')).toBe(true);
		expect(validAlphabeticChars('')).toBe(true);
	});

	it('rejects text with invalid characters', () => {
		expect(validAlphabeticChars('Иван!')).toBe(false);
		expect(validAlphabeticChars('John@')).toBe(false);
	});
});

describe('validHyphenAndApostrophe', () => {
	it('accepts valid hyphen and apostrophe usage', () => {
		expect(validHyphenAndApostrophe('Иван-Иванов')).toBe(true);
		expect(validHyphenAndApostrophe("O'Connor")).toBe(true);
		expect(validHyphenAndApostrophe('')).toBe(true);
	});

	it('rejects invalid hyphen and apostrophe usage', () => {
		expect(validHyphenAndApostrophe('-Иван')).toBe(false);
		expect(validHyphenAndApostrophe('Иван-')).toBe(false);
		expect(validHyphenAndApostrophe("'Иван")).toBe(false);
		expect(validHyphenAndApostrophe("Иван'")).toBe(false);
		expect(validHyphenAndApostrophe('Иван--Иванов')).toBe(false);
		expect(validHyphenAndApostrophe("O''Connor")).toBe(false);
	});
});

describe('containsUppercaseNotAtStart', () => {
	it('accepts text with uppercase not at start', () => {
		expect(containsUppercaseNotAtStart('иванИванов')).toBe(true);
		expect(containsUppercaseNotAtStart('johnDoe')).toBe(true);
	});

	it('rejects text without uppercase or with uppercase only at start', () => {
		expect(containsUppercaseNotAtStart('иванов')).toBe(false);
		expect(containsUppercaseNotAtStart('Иванов')).toBe(false);
		expect(containsUppercaseNotAtStart('')).toBe(false);
	});
});
