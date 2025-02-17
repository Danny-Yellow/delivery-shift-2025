export function validStreet(value: string) {
	return /^[А-ЯЁа-яё0-9-.\s]+$/.test(value);
}

export function validHouseOrApartament(value: string) {
	return /^(?:д\.|кв\.) \d[а-яА-ЯёЁ\-0-9]*(?:\/\d+)?$/.test(value);
}
