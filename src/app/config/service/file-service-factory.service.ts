import { Injectable, Injector } from '@angular/core';

import { ConfigFileService } from './config-file-service.class';
import { ConfigModule } from '../config.module';
import { ConfigType } from '../enums/config-type.enum';
import { JsonFileService } from './json-file.service';
import { YamlFileService } from './yaml-file.service';

@Injectable({
	providedIn: ConfigModule,
})
export class FileServiceFactory {
	constructor(private injector: Injector) {}

	create(configType: ConfigType): ConfigFileService {
		switch (configType) {
			case ConfigType.JSON:
				return this.injector.get(JsonFileService);
			case ConfigType.YAML:
				return this.injector.get(YamlFileService);
		}
	}
}
