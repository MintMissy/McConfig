/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function setValue(object: Record<string | number, any>, path: string, value: any) {
	const clone = getSubValue(object, path);
	clone[getLastKey(path)] = value;
	
	return object;
}

export function removeKey(object: Record<string | number, any>, path: string) {
	const clone = getSubValue(object, path);
	delete clone[getLastKey(path)];

	return clone;
}

export function getSubValue(object: Record<string | number, any>, path: string) {
	const keys = path.split('.');
	let clone = object;
	while (keys.length > 1) {
		clone = clone[keys.shift()!];
	}

	return clone[keys.shift()!];
}

function getLastKey(path: string) {
	return path.split('.').pop()!;
}