export interface ConfigFileService {
	serialize(configuration: string): Record<string | number, any>;
	deserialize(configuration: Record<string | number, any>): string;
}
