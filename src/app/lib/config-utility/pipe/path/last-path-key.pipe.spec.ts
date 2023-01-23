import { LastPathKeyPipe } from './last-path-key.pipe';

describe('LastPathKeyPipe', () => {
	let pipe: LastPathKeyPipe;

	beforeEach(() => {
		pipe = new LastPathKeyPipe();
	});
	
	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should return default key for 1 level nested path', () => {
		expect(pipe.transform('first')).toBe('first');
	});

	it('should return last key for 2 level nested path', () => {
		expect(pipe.transform('first.second')).toBe('second');
	});

	it('should return last key for 3 level nested path', () => {
		expect(pipe.transform('first.second.third')).toBe('third');
	});

	it('should return default key for path that consists of one number', () => {
		expect(pipe.transform('3')).toBe('3');
	});

	it('should return last key for 2 level nested path that ends with number', () => {
		expect(pipe.transform('first.3')).toBe('3');
	});

	it('should return last key for path that ends with number', () => {
		expect(pipe.transform('first.second.3')).toBe('3');
	});
});
