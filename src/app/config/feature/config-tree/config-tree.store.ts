import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';

export interface ConfigTreeState {
	expandedPaths: { [path: string]: boolean };
}

@Injectable()
export class ConfigTreeStore extends ComponentStore<ConfigTreeState> {
	constructor() {
		super({ expandedPaths: {} });
	}

	readonly expandedPaths$ = this.select((state) => state.expandedPaths);

	toggleExpand(path: string) {
		this.patchState((state) => ({ expandedPaths: { ...state.expandedPaths, [path]: !state.expandedPaths[path] } }));
	}
}
