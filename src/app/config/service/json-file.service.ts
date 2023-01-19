import { ConfigFileService, SerializationCallback } from './config-file-service.class';

import { Injectable } from '@angular/core';
import { ConfigModule } from '../config.module';

@Injectable({
	providedIn: ConfigModule,
})
export class JsonFileService extends ConfigFileService {
	deserialize(file: File, callback: SerializationCallback): void {
		this.readFile(file, (fileContent: string) => {
			callback({ configuration: JSON.parse(this.replaceCharacters(fileContent)), fileContent: fileContent });
		});
	}

	serialize(configuration: Record<string | number, any>): string {
		return JSON.stringify(configuration, null, 2);
	}
}
