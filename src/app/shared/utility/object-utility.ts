import { ConfigEntry } from 'src/app/lib/file-parser/model/savable-object.model';
import { isStringifiedNumber } from '../pipe/is-stringified-number.pipe';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function setNestedValue(object: ConfigEntry, path: string, value: any) {
	if (path.split('.').length === 1) {
		object[path] = value;
		return object;
	}

	const temp = getNestedValue(object, path, 2);
	temp[getLastKey(path)] = value;

	return object;
}

export function cloneNestedValue(object: ConfigEntry, path: string) {
	if (path.split('.').length === 1) {
		object[path + '-clone'] = cloneDeep(object[path]);
		return object;
	}

	const lastKeyInPath = getLastKey(path);

	const temp = getNestedValue(object, path, 2);
	let newKey: string | number;

	if (isStringifiedNumber(lastKeyInPath)) {
		newKey = Object.values(temp).length;
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

export function removeNestedKey(object: ConfigEntry, path: string) {
	if (path.split('.').length === 1) {
		delete object[path];
		return object;
	}

	const temp = getNestedValue(object, path, 2);
	delete temp[getLastKey(path)];

	return object;
}

export function renameNestedKey(object: ConfigEntry, path: string, newKey: string) {
	if (path.split('.').length === 1) {
		object[newKey] = object[path];
		delete object[path];
		return object;
	}

	const temp = getNestedValue(object, path, 2);
	temp[newKey] = temp[getLastKey(path)];
	delete temp[getLastKey(path)];

	return object;
}

export function getNestedValue(object: ConfigEntry, path: string, levelFromEnd = 1) {
	const keys = path.split('.');
	if (keys.length <= 1) {
		return object[keys[0]];
	}

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

export function cloneDeep(object: ConfigEntry) {
	return JSON.parse(JSON.stringify(object));
}
