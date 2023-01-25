import { Component, ElementRef, ViewChild } from '@angular/core';
import { TypographyParsingMethod } from 'src/app/lib/minecraft-typography/model/typography-format.model';
import { MinecraftColor } from '../../ui/color-list/color-list.component';

@Component({
	selector: 'app-text-editor-page',
	templateUrl: './text-editor-page.component.html',
	styleUrls: ['./text-editor-page.component.scss'],
})
export class TextEditorPageComponent {
	private lastCursorPosition = 0;

	@ViewChild('messageInput') messageInput!: ElementRef;

	message = '';
	parsingMethods: Record<TypographyParsingMethod, boolean> = {
		MiniMessage: true,
		ColorCode: true,
		HexColorCode: true,
	};

	onInput(newMessage: string, updateCursor = true) {
		const textArea = this.messageInput.nativeElement as HTMLTextAreaElement;

		if (updateCursor) {
			this.lastCursorPosition = textArea.selectionStart;
		}
		this.message = newMessage;

		setTimeout(() => {
			this.setCursorPosition(this.lastCursorPosition);
		}, 0);
	}

	onInputClick() {
		const textArea = this.messageInput.nativeElement as HTMLTextAreaElement;
		this.lastCursorPosition = textArea.selectionStart;
	}

	onParsingMethodToggle(toggledMethod: TypographyParsingMethod) {
		this.parsingMethods[toggledMethod] = !this.parsingMethods[toggledMethod];
		this.setCursorPosition(this.lastCursorPosition);
	}

	onFormatApply(formatCode: string) {
		this.insertTextToMessage(formatCode, this.lastCursorPosition);
	}

	onColorSelect(color: MinecraftColor) {
		this.insertTextToMessage(color.code, this.lastCursorPosition);
	}

	private insertTextToMessage(newText: string, position = this.message.length) {
		const messageLength = this.message.length;

		if (position === messageLength) {
			const message = this.message + newText
			this.setCursorPosition(message.length);
			this.onInput(message, false)
			return;
		}
		const firstPart = this.message.slice(0, position);
		const secondPart = this.message.slice(position, messageLength);
		const message = firstPart + newText + secondPart;

		this.setCursorPosition(firstPart.length + newText.length);
		this.onInput(message, false);
	}

	private setCursorPosition(position: number) {
		if (this.messageInput === null || this.messageInput === undefined) {
			return;
		}
		const textarea = this.messageInput.nativeElement as HTMLTextAreaElement;
		this.lastCursorPosition = position
		textarea.focus();
		textarea.setSelectionRange(position, position);
	}
}
