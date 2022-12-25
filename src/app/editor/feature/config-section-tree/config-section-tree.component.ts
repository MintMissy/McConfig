import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigSectionTreeState, ConfigSectionTreeStore } from './config-section-tree.store';

import { ComponentStore } from '@ngrx/component-store/src';

const JSON_DATA = {
  deployment: {
    test: 'A',
    files: ['fileA', 'FileB'],
  },
  versionNumber: 10,
  threadsafe: true,
};
// const JSON_DATA = {
//   deployment: {
//     test: 'A',
//     files: ['fileA', 'FileB'],
//   },
//   x: 'a',
//   id: 'v1',
//   handlers: [
//     {
//       urlRegex: '/.*',
//       script: {
//         scriptPath: 'example-python-app.py',
//       },
//     },
//   ],
//   runtime: 'python27',
//   material: 'dirt',
//   versionNumber: 10,
//   threadsafe: true,
// };

@Component({
  selector: 'app-config-section-tree',
  templateUrl: './config-section-tree.component.html',
  styleUrls: ['./config-section-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfigSectionTreeStore],
})
export class ConfigSectionTreeComponent implements OnInit {
  @Input() fileName = '';
  @Input() key = '';
  @Input() configSection: any = JSON_DATA;
  @Input() nested = false;

  @Output() expand = new EventEmitter<string>();

  configSection$ = this.componentStore.config$;

  constructor(private readonly componentStore: ConfigSectionTreeStore) {}

  ngOnInit(): void {
    this.componentStore.setState({ config: JSON_DATA, expanded: [] });
  }

  onFieldValueChange($event: { path: string; value: any }) {
    throw new Error('Method not implemented.');
  }

  onSectionExpand($event: { path: string }) {
    throw new Error('Method not implemented.');
  }
}
