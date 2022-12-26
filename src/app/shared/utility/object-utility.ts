export function setValue(object: any, path: string, value: any) {
  const keys = path.split('.');
  let clone = object;
  while (keys.length > 1) {
    clone = clone[keys.shift()!];
  }
  clone[keys.shift()!] = value;
  return object;
}
