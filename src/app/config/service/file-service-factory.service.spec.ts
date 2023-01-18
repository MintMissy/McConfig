import { TestBed } from '@angular/core/testing';
import { ConfigType } from '../enums/config-type.enum';
import { FileServiceFactory } from './file-service-factory.service';
import { JsonFileService } from './json-file.service';
import { YamlFileService } from './yaml-file.service';

describe('ConfigFileServiceFactoryService', () => {
	let factory: FileServiceFactory;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [FileServiceFactory, JsonFileService, YamlFileService],
		});
		factory = TestBed.inject(FileServiceFactory);
	});

	it('should be created', () => {
		expect(factory).toBeTruthy();
	});

	it('should create a JSON file service', () => {
		const fileService = factory.create(ConfigType.JSON);
		expect(fileService).toBeInstanceOf(JsonFileService);
	});

	it('should create a YAML file service', () => {
		const fileService = factory.create(ConfigType.YAML);
		expect(fileService).toBeInstanceOf(YamlFileService);
	});
});
