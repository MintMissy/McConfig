import { parse, stringify } from 'yamljs';

import { ConfigFileService } from './config-file-service.interface';
import { ConfigModule } from '../config.module';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: ConfigModule,
})
export class YamlFileService implements ConfigFileService {
	serialize(configuration: string): Record<string | number, any> {
		return parse(configuration);
	}

	deserialize(configuration: Record<string | number, any>): string {
		return stringify(configuration, 0, 2);
	}
}