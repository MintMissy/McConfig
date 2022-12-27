import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

import { ConfigTreeComponent } from 'src/app/config/feature/config-tree/config-tree.component';
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
	@ViewChild(ConfigTreeComponent)
	set configTree(component: ConfigTreeComponent) {
		console.log(component);
	}

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
			configuration: {},
			downloadLink: '',
		});
		console.log(this.configTree);
	}

	onRemove() {
		this.store.removeFile();
	}

	onUpload(event: Event) {
		const input = event?.target as HTMLInputElement;
		if (input === null || input.files === null) {
			return;
		}

		this.store.uploadFile(input.files[0]);
	}
}
