import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-config-nested-node',
	templateUrl: './config-nested-node.component.html',
	styleUrls: ['./config-nested-node.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigNestedNodeComponent {
	@Input() path = '';
	@Input() configEntries: Record<string | number, any> | null = [];
	@Input() expandedPaths: { [path: string]: boolean } | null = {};
	@Input() root = false;

	@Output() expandToggle = new EventEmitter<{ path: string }>();
	@Output() addSubKey = new EventEmitter<string>();
	@Output() remove = new EventEmitter<string>();
	@Output() clone = new EventEmitter<string>();
	@Output() valueChange = new EventEmitter<{ path: string; value: any }>();
	@Output() keyChange = new EventEmitter<{ path: string; newKey: string }>();

	trackEntry(index: number, entry: { key: string | number; value: any }) {
		return entry ? entry.key : undefined;
	}

	onAddSubKey(path: string) {
		this.addSubKey.emit(path);
	}
}
