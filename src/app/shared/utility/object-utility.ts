/* eslint-disable @typescript-eslint/no-explicit-any */
export function setNestedValue(object: Record<string | number, any>, path: string, value: any) {
	const temp = getNestedValue(object, path, 2);
	temp[getLastKey(path)] = value;

	return object;
}

export function cloneNestedValue(object: Record<string | number, any>, path: string) {
	const lastKeyInPath = getLastKey(path);

	const temp = getNestedValue(object, path, 2);
	let newKey: string | number;
	if (typeof temp[lastKeyInPath] == 'number') {
		newKey = Object.values(lastKeyInPath).length;
		temp[newKey] = cloneDeep(temp[lastKeyInPath]);
	} else {
		newKey = lastKeyInPath + 'Clone';

		if (newKey in temp) {
			newKey = newKey + '-' + Object.values(temp).length;
		}
		temp[newKey] = temp[lastKeyInPath];
	}

	return object;
}

export function removeNestedKey(object: Record<string | number, any>, path: string) {
	const temp = getNestedValue(object, path, 2);
	delete temp[getLastKey(path)];

	return object;
}

export function renameNestedKey(object: Record<string | number, any>, path: string, newKey: string) {
	const temp = getNestedValue(object, path, 2);
	temp[newKey] = temp[getLastKey(path)];
	delete temp[getLastKey(path)];

	return object;
}

export function getNestedValue(object: Record<string | number, any>, path: string, levelFromEnd = 1) {
	const keys = path.split('.');
	if (keys.length === 1) return object;

	let temp = object;
	while (keys.length > levelFromEnd) {
		temp = temp[keys.shift()!];
	}

	return temp[keys.shift()!];
}

function getLastKey(path: string): string {
	const lastKey = path.split('.').pop();
	return lastKey == null ? path : lastKey;
}

export function cloneDeep(object: Record<string | number, any>) {
	return JSON.parse(JSON.stringify(object));
}
