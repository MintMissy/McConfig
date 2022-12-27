import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';

import { ConfigFileService } from 'src/app/config/service/config-file-service.interface';
import { ConfigType } from 'src/app/config/enums/config-type.enum';
import { FileServiceFactory } from 'src/app/config/service/file-service-factory.service';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {
	// TODO component store
	fileName = 'item.yml';
	configuration = ""
	// configuration = JSON_DATA;
	downloadLink!: SafeValue;
	private fileService!: ConfigFileService;

	name = '&eRusty &a&lHa&rm&kmer';
	lore: string[] = ['&7Damage: 12', '&7Defe&mnse: 12', '&#123456789abcdef'];

	onDelete() {
		throw new Error('Method not implemented.');
	}

	constructor(private sanitizer: DomSanitizer, private factory: FileServiceFactory) {}

	updateDownloadLink() {
		// TODO parse config to file
		const blob = new Blob(['example file content'], { type: 'text/json' });
		this.downloadLink = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
	}

	fileChanged(event: Event) {
		const input = event?.target as HTMLInputElement;
		if (input === null || input.files === null) {
			return;
		}

		this.readFile(input.files[0]);
		this.fileService = this.factory.create(ConfigType.JSON);
	}

	readFile(file: File) {
		const fileReader: FileReader = new FileReader();
		fileReader.onloadend = () => {
      // TODO parse output to config
			console.log(fileReader.result);
		};
		fileReader.readAsText(file);
	}
}
