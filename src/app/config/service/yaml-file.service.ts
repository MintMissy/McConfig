import { ConfigFileService, SerializationCallback } from './config-file-service.class';
import { parse, stringify } from 'yamljs';

import { ConfigModule } from '../config.module';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: ConfigModule,
})
export class YamlFileService extends ConfigFileService {
	serialize(file: File, callback: SerializationCallback): void {
		this.readFile(file, (fileContent: string) => {
			callback({ configuration: parse(fileContent), fileContent: fileContent });
		});
	}

	deserialize(configuration: Record<string | number, any>): string {
		return stringify(configuration, 0, 2);
	}
}
