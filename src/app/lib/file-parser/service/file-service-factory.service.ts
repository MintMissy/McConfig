import { Injectable, Injector } from '@angular/core';

import { ConfigType } from '../model/config-type.model';
import { ConfigFileService } from './config-file-service.class';
import { JsonFileService } from './json-file.service';
import { YamlFileService } from './yaml-file.service';

@Injectable()
export class FileServiceFactory {
	constructor(private injector: Injector) {}

	create(configType: ConfigType): ConfigFileService {
		switch (configType) {
			case 'JSON':
				return this.injector.get(JsonFileService);
			case 'YAML':
				return this.injector.get(YamlFileService);
		}
	}
}
