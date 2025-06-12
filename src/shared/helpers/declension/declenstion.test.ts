import { declension } from './declension';

describe('declension', () => {
	it('correctly declines for number 1', () => {
		expect(declension(1, ['день', 'дня', 'дней'])).toBe('день');
	});

	it('correctly declines for numbers 2-4', () => {
		expect(declension(2, ['день', 'дня', 'дней'])).toBe('дня');
		expect(declension(3, ['день', 'дня', 'дней'])).toBe('дня');
		expect(declension(4, ['день', 'дня', 'дней'])).toBe('дня');
	});

	it('correctly declines for numbers 5-20', () => {
		expect(declension(5, ['день', 'дня', 'дней'])).toBe('дней');
		expect(declension(11, ['день', 'дня', 'дней'])).toBe('дней');
		expect(declension(15, ['день', 'дня', 'дней'])).toBe('дней');
		expect(declension(20, ['день', 'дня', 'дней'])).toBe('дней');
	});

	it('correctly declines for numbers above 20', () => {
		expect(declension(21, ['день', 'дня', 'дней'])).toBe('день');
		expect(declension(22, ['день', 'дня', 'дней'])).toBe('дня');
		expect(declension(25, ['день', 'дня', 'дней'])).toBe('дней');
	});

	it('handles negative numbers', () => {
		expect(declension(-1, ['день', 'дня', 'дней'])).toBe('день');
		expect(declension(-2, ['день', 'дня', 'дней'])).toBe('дня');
		expect(declension(-5, ['день', 'дня', 'дней'])).toBe('дней');
	});

	it('handles zero', () => {
		expect(declension(0, ['день', 'дня', 'дней'])).toBe('дней');
	});
});
