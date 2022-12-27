import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ConfigType } from 'src/app/config/enums/config-type.enum';
import { EditorStore } from './editor.store';

const defaultConfig = {
	deployment: {
		test: 'A',
		files: ['fileA', 'FileB'],
	},
	x: 'a',
	id: 'v1',
	handlers: [
		{
			urlRegex: '/.*',
			script: {
				scriptPath: 'example-python-app.py',
			},
		},
	],
	runtime: 'python27',
	material: 'ROOTED_DIRT',
	versionNumber: 10,
	double: 10.1,
	threadsafe: false,
};

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [EditorStore],
})
export class EditorComponent implements OnInit {
	downloadLink$ = this.store.downloadLink$;
	fileName$ = this.store.fileName$;
	fileContent$ = this.store.fileContent$;
	configuration$ = this.store.configuration$;

	constructor(private readonly store: EditorStore) {}

	ngOnInit(): void {
		this.store.setState({
			fileName: '',
			configType: ConfigType.JSON,
			fileContent: '',
			configuration: defaultConfig,
			downloadLink: '',
		});
	}

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

	onKeyClone(path: string) {
		this.store.cloneKey(path)
	}

	onKeyRemove(path: string) {
		this.store.removeKey(path)
	}

	onAddSubKey($event: string) {
		this.store.addSubKey($event)
	}
}
