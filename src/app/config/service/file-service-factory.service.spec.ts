import { TestBed } from '@angular/core/testing';
import { FileServiceFactory } from './file-service-factory.service';

describe('ConfigFileServiceFactoryService', () => {
	let service: FileServiceFactory;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [FileServiceFactory],
		});
		service = TestBed.inject(FileServiceFactory);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
