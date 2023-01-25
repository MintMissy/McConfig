import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-typography-formatting-list',
	templateUrl: './typography-formatting-list.component.html',
	styleUrls: ['./typography-formatting-list.component.scss'],
})
export class TypographyFormattingListComponent {
	@Output() formatApply = new EventEmitter<string>();

	onFormatButtonClick(formatCode: string) {
		this.formatApply.emit(formatCode);
	}
}
