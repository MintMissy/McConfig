import { FileServiceFactory } from './file-service-factory.service';
import { TestBed } from '@angular/core/testing';

describe('ConfigFileServiceFactoryService', () => {
	let service: FileServiceFactory;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FileServiceFactory);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
