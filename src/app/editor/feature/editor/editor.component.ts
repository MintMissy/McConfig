import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ConfigType } from 'src/app/config/enums/config-type.enum';
import { EditorStore } from './editor.store';

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

	constructor(private store: EditorStore) {}

	ngOnInit(): void {
		this.store.setState({
			fileName: '',
			configType: ConfigType.JSON,
			fileContent: '',
			configuration: {},
			downloadLink: '',
		});
	}

	fileChanged(event: Event) {
		const input = event?.target as HTMLInputElement;
		if (input === null || input.files === null) {
			return;
		}

		this.store.uploadFile(input.files[0]);
	}
	
	onRemove() {
		this.store.removeFile();
	}
}
