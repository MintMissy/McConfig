import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs';

import { JsonFileService } from './json-file.service';

describe('JsonFileService', () => {
	let service: JsonFileService;
	let complexObject: Record<number | string, any>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [JsonFileService],
		});
		service = TestBed.inject(JsonFileService);
		complexObject = {
			boolean: true,
			string: 'string',
			number: 4.2,
			list: ['item', 'item2'],
			object: { text: 'text' },
		};
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should deserialize complex object', () => {
		expect(service.serialize(complexObject)).toEqual(JSON.stringify(complexObject, null, 2));
	});

	it('should serialize and deserialize complex object', (done: DoneFn) => {
		const serialized = service.serialize(complexObject);
		const file = new File([serialized], 'file.json');

		service
			.deserialize(file)
			.pipe(take(1))
			.subscribe((deserializedFile) => {
				expect(deserializedFile.configuration).toEqual(complexObject);
				done();
			});
	});

	it('should deserialize object with zeros)', () => {
		const object = {
			zero: 0,
			negativeZero: -0,
		};
		expect(service.serialize(object)).toEqual(JSON.stringify(object, null, 2));
	});

	it('should deserialize object with positive number (zeros)', () => {
		const object = {
			positiveNumber: 99,
		};
		expect(service.serialize(object)).toEqual(JSON.stringify(object, null, 2));
	});

	it('should deserialize object with negative number (zeros)', () => {
		const object = {
			negativeNumber: -99,
		};
		expect(service.serialize(object)).toEqual(JSON.stringify(object, null, 2));
	});

	it('should deserialize object with huge number', () => {
		const object = {
			hugeNumber: 932316666193213,
			hugeNegativeNumber: -932316666193213,
		};
		expect(service.serialize(object)).toEqual(JSON.stringify(object, null, 2));
	});

	it('should deserialize object with floating point numbers', () => {
		const object = {
			floatingPoint: 13.41296143,
			negativeFloatingPoint: 13.41296143,
		};
		expect(service.serialize(object)).toEqual(JSON.stringify(object, null, 2));
	});
});
