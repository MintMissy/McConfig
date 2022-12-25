import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';

export interface ConfigSectionTreeState {
  config: any;
  expanded: string[];
}

@Injectable()
export class ConfigSectionTreeStore extends ComponentStore<ConfigSectionTreeState> {
  constructor() {
    super({ config: {}, expanded: [] });
  }

  readonly config$ = this.select(state => state.config);
}
