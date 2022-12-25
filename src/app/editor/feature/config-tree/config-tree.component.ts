import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ConfigTreeStore } from './config-tree.store';

const JSON_DATA = {
  deployment: {
    test: 'A',
    files: ['fileA', 'FileB'],
  },
  x: 'a',
  id: 'v1',
  handlers: [
    {
      urlRegex: '/.*',
      script: {
        scriptPath: 'example-python-app.py',
      },
    },
  ],
  runtime: 'python27',
  material: 'dirt',
  versionNumber: 10,
  threadsafe: true,
};

@Component({
  selector: 'app-config-tree',
  templateUrl: './config-tree.component.html',
  styleUrls: ['./config-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfigTreeStore],
})
export class ConfigTreeComponent implements OnInit {
  @Input() fileName = '';
  @Input() key = '';
  @Input() configSection: any = JSON_DATA;
  @Input() nested = false;

  @Output() expand = new EventEmitter<string>();

  configSection$ = this.componentStore.config$;
  expandedPaths$ = this.componentStore.expandedPaths$;

  constructor(private readonly componentStore: ConfigTreeStore) {}

  ngOnInit(): void {
    this.componentStore.setState({ config: JSON_DATA, expandedPaths: {} });
  }

  onFieldValueChange($event: { path: string; value: any }) {
    throw new Error('Method not implemented.');
  }

  onSectionExpand($event: { path: string }) {
    this.componentStore.toggleExpand($event.path);
  }
}
