export enum ConfigType {
	YAML,
	JSON,
}

export function getConfigType(file: File): ConfigType {
	const extension = file.name.split('.').pop();
	if (extension === undefined) throw new Error('File name has no extension');

	switch (extension) {
		case 'json':
			return ConfigType.JSON;
		case 'yml':
		case 'yaml':
			return ConfigType.YAML;
	}

	throw new Error('File extension is not supported');
}
