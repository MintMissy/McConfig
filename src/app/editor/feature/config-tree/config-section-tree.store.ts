import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';

export interface ConfigSectionTreeState {
  config: any;
  expandedPaths: { [path: string]: boolean };
}

@Injectable()
export class ConfigSectionTreeStore extends ComponentStore<ConfigSectionTreeState> {
  constructor() {
    super({ config: {}, expandedPaths: {} });
  }

  readonly config$ = this.select((state) => state.config);
  readonly expandedPaths$ = this.select((state) => state.expandedPaths);

  toggleExpand(path: string) {
    this.patchState((state) => ({ expandedPaths: { ...state.expandedPaths, [path]: !state.expandedPaths[path] } }));
  }
}
