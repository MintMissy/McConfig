import { HexColorCodePipe } from './hex-color-code.pipe';

describe('HexColorCodePipe', () => {
	it('create an instance', () => {
		const pipe = new HexColorCodePipe();
		expect(pipe).toBeTruthy();
	});
});
