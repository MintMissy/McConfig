import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ConfigType, getConfigType } from 'src/app/lib/file-parser/model/config-type.model';

import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { take } from 'rxjs';
import { ConfigEntry } from 'src/app/lib/file-parser/model/savable-object.model';
import { ConfigFileService } from 'src/app/lib/file-parser/service/config-file-service.class';
import { FileServiceFactory } from 'src/app/lib/file-parser/service/file-service-factory.service';
import {
	cloneDeep,
	cloneNestedValue,
	getNestedValue,
	removeNestedKey,
	renameNestedKey,
	setNestedValue,
} from 'src/app/shared/utility/object-utility';

export interface EditorState {
	fileName: string;
	configType: ConfigType;
	fileContent: string;
	configuration: ConfigEntry;
	downloadLink: SafeUrl | null;
}

@Injectable()
export class EditorStore extends ComponentStore<EditorState> {
	private fileService!: ConfigFileService;

	constructor(private sanitizer: DomSanitizer, private factory: FileServiceFactory) {
		super({ fileName: '', configType: 'JSON', fileContent: '', configuration: {}, downloadLink: '' });
	}

	readonly downloadLink$ = this.select((state) => state.downloadLink);
	readonly fileName$ = this.select((state) => state.fileName);
	readonly fileContent$ = this.select((state) => state.fileContent);
	readonly configuration$ = this.select((state) => state.configuration);

	editValue(change: { path: string; value: any }) {
		this.patchState((state) => {
			const newConfiguration = cloneDeep(setNestedValue({ ...state.configuration }, change.path, change.value));
			return {
				...state,
				configuration: newConfiguration,
				downloadLink: this.getDownloadUrl(this.fileService.serialize(newConfiguration)),
			};
		});
	}

	uploadFile(file: File) {
		const configType = getConfigType(file);
		this.fileService = this.factory.create(configType);
		this.fileService
			.deserialize(file)
			.pipe(take(1))
			.subscribe((data) => {
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

	addSubKey($event: string) {
		this.patchState((state) => {
			const section = getNestedValue(state.configuration, $event);
			if (Array.isArray(section)) {
				section.push('');
			} else {
				section['newKey-' + Object.keys(section).length] = '';
			}

			const newConfiguration = cloneDeep(state.configuration);
			return {
				...state,
				configuration: newConfiguration,
				downloadLink: this.getDownloadUrl(this.fileService.serialize(newConfiguration)),
			};
		});
	}

	renameKey(path: string, newName: string) {
		this.patchState((state) => {
			const newConfiguration = cloneDeep(renameNestedKey({ ...state.configuration }, path, newName));
			return {
				...state,
				configuration: newConfiguration,
				downloadLink: this.getDownloadUrl(this.fileService.serialize(newConfiguration)),
			};
		});
	}

	removeKey(path: string) {
		this.patchState((state) => {
			const newConfiguration = cloneDeep(removeNestedKey({ ...state.configuration }, path));
			return {
				...state,
				configuration: newConfiguration,
				downloadLink: this.getDownloadUrl(this.fileService.serialize(newConfiguration)),
			};
		});
	}

	cloneKey(path: string) {
		this.patchState((state) => {
			const newConfiguration = cloneDeep(cloneNestedValue({ ...state.configuration }, path));
			return {
				...state,
				configuration: newConfiguration,
				downloadLink: this.getDownloadUrl(this.fileService.serialize(newConfiguration)),
			};
		});
	}

	private getDownloadUrl(fileContent: string) {
		const blob = new Blob([fileContent], { type: 'text/json' });
		return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
	}

	removeFile() {
		this.patchState(() => ({
			configType: 'JSON',
			fileName: '',
			fileContent: '',
			configuration: {},
			downloadLink: '',
		}));
	}
}
