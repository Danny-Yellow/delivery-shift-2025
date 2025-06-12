import { validHouseOrApartament, validStreet } from './validAddress';

describe('validStreet', () => {
	it('accepts valid street names', () => {
		expect(validStreet('Ленина')).toBe(true);
		expect(validStreet('Московская 1')).toBe(true);
		expect(validStreet('ул. Пушкина')).toBe(true);
		expect(validStreet('проспект Мира-1')).toBe(true);
	});

	it('rejects invalid street names', () => {
		expect(validStreet('')).toBe(false);
		expect(validStreet('Street 123')).toBe(false);
		expect(validStreet('ул. Пушкина!')).toBe(false);
		expect(validStreet('проспект Мира@')).toBe(false);
	});
});

describe('validHouseOrApartament', () => {
	it('accepts valid house or apartment numbers', () => {
		expect(validHouseOrApartament('д. 1')).toBe(true);
		expect(validHouseOrApartament('д. 1А')).toBe(true);
		expect(validHouseOrApartament('д. 1/2')).toBe(true);
		expect(validHouseOrApartament('кв. 123')).toBe(true);
		expect(validHouseOrApartament('кв. 123А')).toBe(true);
	});

	it('rejects invalid house or apartment numbers', () => {
		expect(validHouseOrApartament('')).toBe(false);
		expect(validHouseOrApartament('дом 1')).toBe(false);
		expect(validHouseOrApartament('квартира 123')).toBe(false);
		expect(validHouseOrApartament('д. 1!')).toBe(false);
		expect(validHouseOrApartament('кв. 123@')).toBe(false);
	});
});
