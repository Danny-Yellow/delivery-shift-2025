import { handleOnlyNumbers } from './handleOnlyNumbers';

describe('handleOnlyNumbers', () => {
	it('calls callback if input contains only digits', () => {
		const callback = jest.fn();
		handleOnlyNumbers('123456', callback);
		expect(callback).toHaveBeenCalled();
	});

	it('does not call callback if input contains non-digits', () => {
		const callback = jest.fn();
		handleOnlyNumbers('123abc456', callback);
		expect(callback).not.toHaveBeenCalled();
	});

	it('calls callback for empty string', () => {
		const callback = jest.fn();
		handleOnlyNumbers('', callback);
		expect(callback).not.toHaveBeenCalled();
	});

	it('does not call callback for string with spaces', () => {
		const callback = jest.fn();
		handleOnlyNumbers('123 456', callback);
		expect(callback).not.toHaveBeenCalled();
	});

	it('does not call callback for string with special characters', () => {
		const callback = jest.fn();
		handleOnlyNumbers('123-456', callback);
		expect(callback).not.toHaveBeenCalled();
	});
});
