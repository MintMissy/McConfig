import { Component, EventEmitter, Output } from '@angular/core';
import { TypographyParsingMethod } from 'src/app/lib/minecraft-typography/model/typography-format.model';
import { MinecraftColor } from '../../ui/color-list/color-list.component';

@Component({
	selector: 'app-text-editor-toolbar',
	templateUrl: './text-editor-toolbar.component.html',
	styleUrls: ['./text-editor-toolbar.component.scss'],
})
export class TextEditorToolbarComponent {
	@Output() colorSelect = new EventEmitter<MinecraftColor>();
	@Output() toggleParsing = new EventEmitter<TypographyParsingMethod>();
	@Output() formatApply = new EventEmitter<string>();

	onParsingMethodToggle(toggledMethod: TypographyParsingMethod) {
		this.toggleParsing.emit(toggledMethod);
	}

	onFormatApply(formatCode: string) {
		this.formatApply.emit(formatCode);
	}

	onColorSelect(color: MinecraftColor) {
		this.colorSelect.emit(color);
	}
}
