export type TypographyParsingMethod = 'MiniMessage' | 'ColorCode' | 'HexColorCode';

export function getTypographyParsingMethods(): TypographyParsingMethod[] {
	return ['ColorCode', 'HexColorCode', 'MiniMessage'];
}
