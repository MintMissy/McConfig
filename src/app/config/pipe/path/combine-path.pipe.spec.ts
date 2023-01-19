import { CombinePathPipe } from './combine-path.pipe';

describe('CombinePathPipe', () => {
	let pipe: CombinePathPipe;

	beforeEach(() => {
		pipe = new CombinePathPipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('return only root path', () => {
		expect(pipe.transform('', 'rootKey')).toBe("rootKey");
	});

	it('combine nested key and single path', () => {
		expect(pipe.transform('path', 'key.nested')).toBe("path.key.nested");
	});

	it('combine single key and nested path', () => {
		expect(pipe.transform('path.nested', 'key')).toBe("path.nested.key");
	});

	it('combine 2 single key paths', () => {
		expect(pipe.transform('path', 'key')).toBe("path.key");
	});

	it('combine 2 nested paths', () => {
		expect(pipe.transform('path.child', 'key.childKey')).toBe("path.child.key.childKey");
	});
});
