import { IsStringifiedNumberPipe } from './is-stringified-number.pipe';

describe('IsStringifiedNumberPipe', () => {
	it('create an instance', () => {
		const pipe = new IsStringifiedNumberPipe();
		expect(pipe).toBeTruthy();
	});
});
