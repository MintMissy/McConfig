import { Component, EventEmitter, Input, Output } from '@angular/core';

export type MinecraftColor = { color: string; code: string };
export type MinecraftColorPalette = MinecraftColor[];

const defaultPalette: MinecraftColorPalette = [
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
	selector: 'app-color-list',
	templateUrl: './color-list.component.html',
	styleUrls: ['./color-list.component.scss'],
})
export class ColorListComponent {
	@Input() colors: MinecraftColorPalette = defaultPalette;

	@Output() colorSelect = new EventEmitter<MinecraftColor>();

	onColorSelect(color: MinecraftColor) {
		this.colorSelect.emit(color);
	}
}
