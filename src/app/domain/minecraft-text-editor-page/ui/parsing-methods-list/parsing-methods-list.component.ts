import { Component, EventEmitter, Output } from '@angular/core';
import {
	getTypographyParsingMethods,
	TypographyParsingMethod
} from 'src/app/lib/minecraft-typography/model/typography-format.model';

@Component({
	selector: 'app-parsing-methods-list',
	templateUrl: './parsing-methods-list.component.html',
	styleUrls: ['./parsing-methods-list.component.scss'],
})
export class ParsingMethodsListComponent {
	@Output() toggleParsing = new EventEmitter<TypographyParsingMethod>();

	TypographyFormats = getTypographyParsingMethods();

	onFormatToggle(event: any, format: TypographyParsingMethod) {
		this.toggleParsing.emit(format);
	}
}
