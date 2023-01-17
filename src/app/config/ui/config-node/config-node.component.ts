import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LastPathKeyPipe } from '../../pipe/path/last-path-key.pipe';

@Component({
	selector: 'app-config-node',
	templateUrl: './config-node.component.html',
	styleUrls: ['./config-node.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [LastPathKeyPipe],
})
export class ConfigNodeComponent implements OnInit {
	keyInputValue = '';

	@Input() path = 'path';
	@Input() value: any = '';
	@Input() iconSize = '1.5rem';

	@Output() keyChange = new EventEmitter<{ path: string; newKey: string }>();
	@Output() valueChange = new EventEmitter<{ path: string; value: any }>();
	@Output() changeType = new EventEmitter<{path: string, type: string}>();
	@Output() remove = new EventEmitter<string>();
	@Output() clone = new EventEmitter<string>();

	constructor(private lastPathKeyPipe: LastPathKeyPipe) {}

	ngOnInit(): void {
		this.keyInputValue = this.lastPathKeyPipe.transform(this.path);
	}

	onKeyChange() {
		if (this.keyInputValue === this.lastPathKeyPipe.transform(this.path)) return;
		this.keyChange.emit({ path: this.path, newKey: this.keyInputValue });
	}
}
