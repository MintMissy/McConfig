import * as YAML from 'js-yaml';

import { ConfigFileService, SerializationCallback } from './config-file-service.class';

import { Injectable } from '@angular/core';
import { ConfigModule } from '../config.module';

@Injectable({
	providedIn: ConfigModule,
})
export class YamlFileService extends ConfigFileService {
	deserialize(file: File, callback: SerializationCallback): void {
		this.readFile(file, (fileContent: string) => {
			callback({ configuration: YAML.load(fileContent)!, fileContent: fileContent });
		});
	}

	serialize(configuration: Record<string | number, any>): string {
		return YAML.dump(configuration);
	}
}
