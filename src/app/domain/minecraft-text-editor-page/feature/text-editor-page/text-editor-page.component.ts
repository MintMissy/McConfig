import { Component } from '@angular/core';
import { MatChipSelectionChange } from '@angular/material/chips';
import { getTypographyFormats } from '../../../../lib/minecraft-typography/model/typography-format.model';

type FormatActions = 'bold' | 'cursive' | 'strike' | 'underline' | 'obfuscated' | 'reset';

type ColorActions = 'color';
const ColorActions: { color: string; code: string }[] = [
	{ code: '&0', color: '#000000' },
	{ code: '&1', color: '#0000AA' },
	{ code: '&2', color: '#00AA00' },
	{ code: '&3', color: '#00AAAA' },
	{ code: '&4', color: '#AA0000' },
	{ code: '&5', color: '#AA00AA' },
	{ code: '&6', color: '#FFAA00' },
	{ code: '&7', color: '#AAAAAA' },
	{ code: '&8', color: '#555555' },
	{ code: '&9', color: '#5555FF' },
	{ code: '&a', color: '#55FF55' },
	{ code: '&b', color: '#55FFFF' },
	{ code: '&c', color: '#FF5555' },
	{ code: '&d', color: '#FF55FF' },
	{ code: '&e', color: '#FFFF55' },
	{ code: '&f', color: '#FFFFFF' },
];

@Component({
	selector: 'app-text-editor-page',
	templateUrl: './text-editor-page.component.html',
	styleUrls: ['./text-editor-page.component.scss'],
})
export class TextEditorPageComponent {
onTypographyFormatToggle($event: MatChipSelectionChange) {
throw new Error('Method not implemented.');
}
	TypographyFormats = getTypographyFormats();
	ColorActions = ColorActions;

	onColorSelect(_t8: string) {
		throw new Error('Method not implemented.');
	}
}
