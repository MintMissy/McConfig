import { ConfigFileService } from './config-file-service.interface';
import { ConfigModule } from '../config.module';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: ConfigModule,
})
export class JsonFileService implements ConfigFileService {
	serialize(configuration: string): Record<string | number, any> {
		return JSON.parse(configuration);
	}

	deserialize(configuration: Record<string | number, any>): string {
		return JSON.stringify(configuration, null, 2);
	}
}
