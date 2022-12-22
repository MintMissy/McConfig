export function isHexColor(sequence: string): boolean {
  return /#[0-9a-f]{6}/.test(sequence);
}
