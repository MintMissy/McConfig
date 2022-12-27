import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { setValue } from 'src/app/shared/utility/object-utility';

export interface ConfigTreeState {
	config: any;
	expandedPaths: { [path: string]: boolean };
}

@Injectable()
export class ConfigTreeStore extends ComponentStore<ConfigTreeState> {
	constructor() {
		super({ config: {}, expandedPaths: {} });
	}

	readonly config$ = this.select((state) => state.config);
	readonly expandedPaths$ = this.select((state) => state.expandedPaths);

	toggleExpand(path: string) {
		this.patchState((state) => ({ expandedPaths: { ...state.expandedPaths, [path]: !state.expandedPaths[path] } }));
	}

	editValue(change: { path: string; value: any }) {
		this.patchState((state) => {
			return { config: setValue({ ...state.config }, change.path, change.value) };
		});
	}
}
