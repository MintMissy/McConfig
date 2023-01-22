import { Observable } from 'rxjs';
import { ConfigEntry } from '../model/savable-object.model';

export type DeserializedFile = {
	configuration: ConfigEntry;
	fileContent: string;
};

export abstract class ConfigFileService {
	abstract deserialize(file: File): Observable<DeserializedFile>;

	abstract serialize(configuration: ConfigEntry): string;

	protected readFile(file: File, callback: (fileContent: string) => void): void {
		const fileReader: FileReader = new FileReader();
		fileReader.onloadend = () => {
			callback(fileReader.result as string);
		};
		fileReader.readAsText(file);
	}

	protected replaceCharacters(fileContent: string): string {
		return fileContent.replace(/\r\n\t/g, '');
	}
}
