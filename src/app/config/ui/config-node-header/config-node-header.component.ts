import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-config-node-header',
	templateUrl: './config-node-header.component.html',
	styleUrls: ['./config-node-header.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigNodeHeaderComponent {
	@Input() path = 'path';
	@Input() expanded = false;

	@Output() expandToggle = new EventEmitter<{ path: string }>();
	@Output() addSubKey = new EventEmitter<string>();
	@Output() remove = new EventEmitter<string>();
	@Output() clone = new EventEmitter<string>();

	onAddSubKey(path: string) {
		this.addSubKey.emit(path);
	}
}
