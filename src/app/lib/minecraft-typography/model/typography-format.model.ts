export type TypographyFormat = 'MiniMessage' | 'ColorCode' | 'HexColorCode';

export function getTypographyFormats(): TypographyFormat[] {
	return ['ColorCode', 'HexColorCode', 'MiniMessage'];
}
