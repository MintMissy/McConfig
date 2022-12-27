import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import { ConfigTreeStore } from './config-tree.store';

@Component({
	selector: 'app-config-tree',
	templateUrl: './config-tree.component.html',
	styleUrls: ['./config-tree.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ConfigTreeStore],
})
export class ConfigTreeComponent implements OnInit {
	@Input() configSection: Record<string | number, any> | null = {};

	@Output() valueChange = new EventEmitter<{ path: string; value: any }>();

	expandedPaths$ = this.componentStore.expandedPaths$;

	constructor(private readonly componentStore: ConfigTreeStore) {}

	ngOnInit(): void {
		this.componentStore.setState({ expandedPaths: {} });
	}

	onSectionExpand($event: { path: string }) {
		this.componentStore.toggleExpand($event.path);
	}
}
