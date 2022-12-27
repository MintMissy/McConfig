import { ConfigType, getConfigType } from 'src/app/config/enums/config-type.enum';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { ComponentStore } from '@ngrx/component-store';
import { ConfigFileService } from 'src/app/config/service/config-file-service.class';
import { FileServiceFactory } from 'src/app/config/service/file-service-factory.service';
import { Injectable } from '@angular/core';

export interface EditorState {
	fileName: string;
	configType: ConfigType;
	fileContent: string;
	configuration: Record<string | number, any>;
	downloadLink: SafeUrl | null;
}

@Injectable()
export class EditorStore extends ComponentStore<EditorState> {
	private fileService!: ConfigFileService;

	constructor(private sanitizer: DomSanitizer, private factory: FileServiceFactory) {
		super({ fileName: '', configType: ConfigType.JSON, fileContent: '', configuration: {}, downloadLink: '' });
	}

	readonly downloadLink$ = this.select((state) => state.downloadLink);
	readonly fileName$ = this.select((state) => state.fileName);
	readonly fileContent$ = this.select((state) => state.fileContent);
	readonly configuration$ = this.select((state) => state.configuration);

	uploadFile(file: File) {
		const configType = getConfigType(file);
		this.fileService = this.factory.create(configType);
		this.fileService.serialize(file, (data) => {
			this.patchState((state) => ({
				...state,
				fileName: file.name,
				configType: configType,
				configuration: data.configuration,
				fileContent: data.fileContent,
				downloadLink: this.getDownloadUrl(data.fileContent),
			}));
		});
	}

	private getDownloadUrl(fileContent: string) {
		const blob = new Blob([fileContent], { type: 'text/json' });
		return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
	}

	removeFile() {
		this.patchState((state) => ({
			configType: ConfigType.JSON,
			fileName: '',
			fileContent: '',
			configuration: {},
			downloadLink: '',
		}));
	}
}
