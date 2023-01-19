export type SerializationCallback = (data: {
	configuration: Record<string | number, any>;
	fileContent: string;
}) => void;

export abstract class ConfigFileService {
	abstract deserialize(file: File, callback: SerializationCallback): void;

	abstract serialize(configuration: Record<string | number, any>): string;

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
