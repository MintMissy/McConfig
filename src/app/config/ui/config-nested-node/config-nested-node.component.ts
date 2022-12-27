import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

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
	@Output() valueChange = new EventEmitter<{ path: string; value: any }>();

	trackEntry(index: number, entry: { key: string | number; value: any }) {
		return entry ? entry.key : undefined;
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
	}
}
