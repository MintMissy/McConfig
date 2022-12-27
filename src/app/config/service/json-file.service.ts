import { ConfigFileService, SerializationCallback } from './config-file-service.class';

import { ConfigModule } from '../config.module';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: ConfigModule,
})
export class JsonFileService extends ConfigFileService {
	serialize(file: File, callback: SerializationCallback): void {
		this.readFile(file, (fileContent: string) => {
			callback({ configuration: JSON.parse(this.replaceCharacters(fileContent)), fileContent: fileContent });
		});
	}

	deserialize(configuration: Record<string | number, any>): string {
		return JSON.stringify(configuration, null, 2);
	}
}
