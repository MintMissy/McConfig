import { Pipe, PipeTransform } from '@angular/core';
import { MinecraftTextPipe } from 'src/app/lib/minecraft-typography/pipe/minecraft-text.pipe';

const minimessageColorMap: Record<string, string> = {
	black: '#000000',
	dark_blue: '#0000AA',
	dark_green: '#00AA00',
	dark_aqua: '#00AAAA',
	dark_red: '#AA0000',
	dark_purple: '#AA00AA',
	gold: '#FFAA00',
	gray: '#AAAAAA',
	grey: '#AAAAAA',
	dark_gray: '#555555',
	dark_grey: '#555555',
	blue: '#5555FF',
	green: '#55FF55',
	aqua: '#55FFFF',
	red: '#FF5555',
	light_purple: '#FF55FF',
	yellow: '#FFFF55',
	white: '#FFFFFF',
};

@Pipe({
	name: 'miniMessage',
})
export class MiniMessagePipe extends MinecraftTextPipe implements PipeTransform {
	// TODO parse gradients
	// TODO parse MiniMessage
	// <#00ff00></#00ff00>

	// <color:black></color:black>
	// <colour:black></colour:black>
	// <c:black></c:black>

	// <bold></bold>

	transform(message: string): string {
		throw new Error('Method not implemented.');
	}

	protected parseColor(message: string): { success: boolean; message: string; passedChars: number } {
		throw new Error('Method not implemented.');
	}
	protected parseFormatReset(message: string): { success: boolean; message: string; passedChars: number } {
		throw new Error('Method not implemented.');
	}
	protected parseTextDecoration(message: string): { success: boolean; message: string; passedChars: number } {
		throw new Error('Method not implemented.');
	}

	protected getResetFormats(): string[] {
		return ['reset', 'r'];
	}

	protected getBoldFormats(): string[] {
		return ['bold', 'b'];
	}

	protected getItalicFormats(): string[] {
		return ['italic', 'i', 'em'];
	}

	protected getObfuscatedFormats(): string[] {
		return ['obfuscated', 'obf'];
	}

	protected getUnderlineFormats(): string[] {
		return ['underline', 'u'];
	}

	protected getLineThroughFormats(): string[] {
		return ['strikethrough', 'st'];
	}
}
