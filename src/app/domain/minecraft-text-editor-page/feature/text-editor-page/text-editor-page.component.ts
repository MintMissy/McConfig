import { Component, ElementRef, ViewChild } from '@angular/core';
import { TypographyParsingMethod } from 'src/app/lib/minecraft-typography/model/typography-format.model';
import { MinecraftColor } from '../../ui/color-list/color-list.component';

@Component({
	selector: 'app-text-editor-page',
	templateUrl: './text-editor-page.component.html',
	styleUrls: ['./text-editor-page.component.scss'],
})
export class TextEditorPageComponent {
	@ViewChild('messageInput') messageInput!: ElementRef;

	message = '';
	parsingMethods: Record<TypographyParsingMethod, boolean> = {
		MiniMessage: true,
		ColorCode: true,
		HexColorCode: true,
	};

	onParsingMethodToggle(toggledMethod: TypographyParsingMethod) {
		this.parsingMethods[toggledMethod] = !this.parsingMethods[toggledMethod];
		this.focusInput();
	}

	onFormatApply(formatCode: string) {
		this.message += formatCode;
		this.focusInput();
	}

	onColorSelect(color: MinecraftColor) {
		this.message += color.code;
		this.focusInput();
	}

	private focusInput() {
		if (this.messageInput === null || this.messageInput === undefined) {
			return;
		}
		this.messageInput.nativeElement.focus();
	}
}
