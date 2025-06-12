import { capitalizeFirstLetter } from './capitalizeFirstLettet';

describe('capitalizeFirstLetter', () => {
	it('capitalizes first letter', () => {
		expect(capitalizeFirstLetter('hello')).toBe('Hello');
		expect(capitalizeFirstLetter('world')).toBe('World');
	});

	it('returns empty string if input is empty', () => {
		expect(capitalizeFirstLetter('')).toBe('');
	});

	it('handles single letter', () => {
		expect(capitalizeFirstLetter('a')).toBe('A');
	});

	it('does not modify already capitalized string', () => {
		expect(capitalizeFirstLetter('Hello')).toBe('Hello');
	});

	it('handles string with numbers', () => {
		expect(capitalizeFirstLetter('123abc')).toBe('123abc');
		expect(capitalizeFirstLetter('9test')).toBe('9test');
	});

	it('handles string with special characters', () => {
		expect(capitalizeFirstLetter('@hello')).toBe('@hello');
		expect(capitalizeFirstLetter('#world')).toBe('#world');
		expect(capitalizeFirstLetter('$example')).toBe('$example');
	});

	it('handles mixed characters', () => {
		expect(capitalizeFirstLetter('mix123@test')).toBe('Mix123@test');
		expect(capitalizeFirstLetter('123#mix@test')).toBe('123#mix@test');
	});
});
