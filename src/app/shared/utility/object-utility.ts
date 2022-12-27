/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function setValue(object: Record<string | number, any>, path: string, value: any) {
	const keys = path.split('.');
	let clone = object;
	while (keys.length > 1) {
		clone = clone[keys.shift()!];
	}
	clone[keys.shift()!] = value;
	return object;
}
