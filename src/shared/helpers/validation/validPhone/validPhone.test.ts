import { validPhone } from './validPhone';

describe('validPhone', () => {
	it('accepts valid phone numbers', () => {
		expect(validPhone('89991234567')).toBe(true);
		expect(validPhone('+7 (999) 123-45-67')).toBe(true);
		expect(validPhone('8(999)123-45-67')).toBe(true);
		expect(validPhone('+79991234567')).toBe(true);
	});

	it('rejects invalid phone numbers', () => {
		expect(validPhone('')).toBe(false);
		expect(validPhone('123')).toBe(false);
		expect(validPhone('899912345678')).toBe(false);
		expect(validPhone('abc')).toBe(false);
		expect(validPhone('+7 (999) 123-45-6')).toBe(false);
	});
});
