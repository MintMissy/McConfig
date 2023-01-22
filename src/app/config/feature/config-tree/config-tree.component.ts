import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigEntry } from '../../model/savable-object.model';

import { ConfigTreeStore } from './config-tree.store';

@Component({
	selector: 'app-config-tree',
	templateUrl: './config-tree.component.html',
	styleUrls: ['./config-tree.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ConfigTreeStore],
})
export class ConfigTreeComponent implements OnInit {
	@Input() configSection: ConfigEntry | null = {};

	@Output() valueChange = new EventEmitter<{ path: string; value: any }>();
	@Output() addSubKey = new EventEmitter<string>();
	@Output() clone = new EventEmitter<string>();
	@Output() remove = new EventEmitter<string>();
	@Output() keyChange = new EventEmitter<{ path: string; newKey: string }>();
	@Output() changeType = new EventEmitter<{ path: string; type: string }>();

	expandedPaths$ = this.componentStore.expandedPaths$;

	constructor(private readonly componentStore: ConfigTreeStore) {}

	ngOnInit(): void {
		this.componentStore.setState({ expandedPaths: {} });
	}

	onSectionExpand($event: { path: string }) {
		this.componentStore.toggleExpand($event.path);
	}

	onAddKey(path: string) {
		this.addSubKey.emit(path);
	}

	onClone(path: string) {
		this.clone.emit(path);
	}

	onChangeType($event: { path: string; type: string }) {
		this.changeType.emit($event);
	}
}
