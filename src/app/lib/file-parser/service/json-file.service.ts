import { ConfigFileService, DeserializedFile } from './config-file-service.class';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigEntry } from '../model/savable-object.model';

@Injectable({
	providedIn: 'root',
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

	serialize(configuration: ConfigEntry): string {
		return JSON.stringify(configuration, null, 2);
	}
}
