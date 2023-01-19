import * as YAML from 'js-yaml';

import { ConfigFileService, DeserializedFile } from './config-file-service.class';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigModule } from '../config.module';

@Injectable({
	providedIn: ConfigModule,
})
export class YamlFileService extends ConfigFileService {
	deserialize(file: File): Observable<DeserializedFile> {
		const observable = new Observable<DeserializedFile>((subscriber) => {
			this.readFile(file, (fileContent: string) => {
				const deserializedObject = YAML.load(fileContent) as object | null;
				if (deserializedObject === null) {
					subscriber.error(`Couldn't deserialize object from file: ${file.name}`);
					return;
				}

				subscriber.next({ configuration: deserializedObject, fileContent: fileContent });
			});
		});
		return observable;
	}

	serialize(configuration: Record<string | number, any>): string {
		return YAML.dump(configuration);
	}
}
