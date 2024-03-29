import { ChangeDetectionStrategy, Component } from '@angular/core';
import { exampleConfig } from '../../constants/example-config';

import { EditorStore } from './editor.store';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [EditorStore],
})
export class EditorComponent {
	downloadLink$ = this.store.downloadLink$;
	fileName$ = this.store.fileName$;
	fileContent$ = this.store.fileContent$;
	configuration$ = this.store.configuration$;

	constructor(private readonly store: EditorStore) {}

	onConfigRemove() {
		this.store.removeFile();
	}

	onUpload(event: Event) {
		const input = event?.target as HTMLInputElement;
		if (input === null || input.files === null) return;

		this.store.uploadFile(input.files[0]);
	}

	onValueChange($event: { path: string; value: any }) {
		this.store.editValue($event);
	}

	onKeyChange($event: { path: string; newKey: string }) {
		this.store.renameKey($event.path, $event.newKey);
	}

	onKeyClone(path: string) {
		this.store.cloneKey(path);
	}

	onKeyRemove(path: string) {
		this.store.removeKey(path);
	}

	onAddSubKey(path: string) {
		this.store.addSubKey(path);
	}

	onSampleConfigClick() {
		const file = new File([JSON.stringify(exampleConfig)], 'example_configuration.json', { type: 'text/plain' });
		this.store.uploadFile(file);
	}

	onChangeType($event: { path: string; type: string }) {
		let newValue: any;
		const type = $event.type;
		if (type === 'number') {
			newValue = 0;
		} else if (type === 'string') {
			newValue = '';
		} else if (type === 'boolean') {
			newValue = true;
		} else if (type === 'array') {
			newValue = [];
		} else if (type === 'object') {
			newValue = {};
		}

		this.store.editValue({ path: $event.path, value: newValue });
	}
}
