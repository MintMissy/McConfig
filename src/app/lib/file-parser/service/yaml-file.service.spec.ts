import { TestBed } from '@angular/core/testing';

import { YamlFileService } from './yaml-file.service';

describe('YamlFileService', () => {
	let service: YamlFileService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [YamlFileService],
		});
		service = TestBed.inject(YamlFileService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
