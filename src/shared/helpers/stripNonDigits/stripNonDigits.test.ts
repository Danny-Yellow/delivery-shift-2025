import { stripNonDigits } from './stripNonDigits';

describe('stripNonDigits', () => {
	it('removes all non-digit characters', () => {
		expect(stripNonDigits('+7 (999) 123-45-67')).toBe('79991234567');
		expect(stripNonDigits('8-999-123-45-67')).toBe('89991234567');
		expect(stripNonDigits('999.123.45.67')).toBe('9991234567');
	});

	it('handles string with only digits', () => {
		expect(stripNonDigits('79991234567')).toBe('79991234567');
		expect(stripNonDigits('89991234567')).toBe('89991234567');
	});

	it('handles empty string', () => {
		expect(stripNonDigits('')).toBe('');
	});

	it('handles string with special characters', () => {
		expect(stripNonDigits('!@#$%^&*()_+')).toBe('');
		expect(stripNonDigits('phone:89991234567')).toBe('89991234567');
	});

	it('handles mixed content', () => {
		expect(stripNonDigits('tel:+7(999)123-45-67ext.123')).toBe('79991234567123');
		expect(stripNonDigits('Contact: 8 (999) 123.45.67')).toBe('89991234567');
	});
});
