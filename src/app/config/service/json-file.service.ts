import { ConfigFileService, DeserializedFile } from './config-file-service.class';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigModule } from '../config.module';

@Injectable({
	providedIn: ConfigModule,
})
export class JsonFileService extends ConfigFileService {
	deserialize(file: File): Observable<DeserializedFile> {
		const observable = new Observable<DeserializedFile>((subscriber) => {
			this.readFile(file, (fileContent: string) => {
				subscriber.next({ configuration: JSON.parse(this.replaceCharacters(fileContent)), fileContent: fileContent });
			});
		});
		return observable;
	}

	serialize(configuration: Record<string | number, any>): string {
		return JSON.stringify(configuration, null, 2);
	}
}
