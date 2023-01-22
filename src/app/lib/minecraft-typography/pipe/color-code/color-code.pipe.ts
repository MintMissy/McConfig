import { Pipe, PipeTransform } from '@angular/core';

import { MinecraftTextPipe } from '../minecraft-text.pipe';

const colorCodesColorMap: Map<string, string> = new Map([
	['0', '#000000'],
	['1', '#0000AA'],
	['2', '#00AA00'],
	['3', '#00AAAA'],
	['4', '#AA0000'],
	['5', '#AA00AA'],
	['6', '#FFAA00'],
	['7', '#AAAAAA'],
	['8', '#555555'],
	['9', '#5555FF'],
	['a', '#55FF55'],
	['b', '#55FFFF'],
	['c', '#FF5555'],
	['d', '#FF55FF'],
	['e', '#FFFF55'],
	['f', '#FFFFFF'],
]);

@Pipe({
	name: 'colorCode',
})
export class ColorCodePipe extends MinecraftTextPipe implements PipeTransform {
	transform(message: string): string {
		let tagsToClose = [''];
		let parsedMessage = '';

		for (let i = 0; i < message.length; i++) {
			const messageSub = message.substring(i);

			// Parse colors
			const parsedColor = this.parseColor(messageSub);
			if (parsedColor.success) {
				parsedMessage += tagsToClose.join('') + parsedColor.message;
				tagsToClose = [];
				tagsToClose.push('</span>');
				i += parsedColor.passedChars - 1;
				continue;
			}

			// Parse reset format codes
			const parsedResetFormat = this.parseFormatReset(messageSub);
			if (parsedResetFormat.success) {
				parsedMessage += tagsToClose.join('') + parsedResetFormat.message;
				tagsToClose = [];
				i += parsedResetFormat.passedChars - 1;
				continue;
			}

			// Parse decoration formats
			const parsedTextDecoration = this.parseTextDecoration(messageSub);
			if (parsedTextDecoration.success) {
				parsedMessage += parsedTextDecoration.message;
				i += parsedTextDecoration.passedChars - 1;
				continue;
			}

			parsedMessage += message.charAt(i);
			tagsToClose.push('</span>');
		}

		return parsedMessage + tagsToClose.join('');
	}

	protected parseColor(message: string): { success: boolean; message: string; passedChars: number } {
		if (message.length <= 1) {
			return { success: false, message: message, passedChars: 2 };
		}

		const firstLetter = message.charAt(0);
		if ((firstLetter === '&' || firstLetter === '§') && colorCodesColorMap.has(message.charAt(1))) {
			const color = colorCodesColorMap.get(message.charAt(1));

			message = this.getColorSpan(color ? color : '#ffffff');

			return { success: true, message: message, passedChars: 2 };
		}

		return { success: false, message: message, passedChars: 2 };
	}

	protected parseFormatReset(message: string): { success: boolean; message: string; passedChars: number } {
		if (message.length <= 1) {
			return { success: false, message: message, passedChars: 2 };
		}

		const prefix = message.substring(0, 2);
		if (this.getResetFormats().includes(prefix)) {
			return { success: true, message: this.getResetSpan(), passedChars: 2 };
		}

		return { success: false, message: message, passedChars: 2 };
	}

	protected parseTextDecoration(message: string): { success: boolean; message: string; passedChars: number } {
		if (message.length <= 1) {
			return { success: false, message: message, passedChars: 2 };
		}

		const prefix = message.substring(0, 2);
		if (this.getDecorationFormats().includes(prefix)) {
			const textDecorationSpan = this.getTextDecorationSpan(prefix);
			if (textDecorationSpan === null) {
				return { success: false, message: message, passedChars: 2 };
			}

			return { success: true, message: textDecorationSpan, passedChars: 2 };
		}

		return { success: false, message: message, passedChars: 2 };
	}

	protected getResetFormats(): string[] {
		return ['§r', '&r', '§R', '&R'];
	}

	protected getBoldFormats(): string[] {
		return ['§l', '&l', '§L', '&L'];
	}

	protected getItalicFormats(): string[] {
		return ['§o', '&o', '§O', '&O'];
	}

	protected getObfuscatedFormats(): string[] {
		return ['§k', '&k', '§K', '&K'];
	}

	protected getUnderlineFormats(): string[] {
		return ['§u', '&u', '§U', '&U'];
	}

	protected getLineThroughFormats(): string[] {
		return ['§m', '&m', '§M', '&M'];
	}
}
