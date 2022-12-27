export function obfuscatedText(text: string): string {
	return text
		.split('')
		.map(() => randomCharacter())
		.join('');
}

export function randomCharacter(): string {
	return String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33);
}
