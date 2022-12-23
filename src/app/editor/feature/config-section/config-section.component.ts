import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

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
  selector: 'app-config-section',
  templateUrl: './config-section.component.html',
  styleUrls: ['./config-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigSectionComponent {
  @Input() key = '';
  @Input() configSection: any = JSON_DATA;
  @Input() nested = false;

  @Output() expand = new EventEmitter<string>();

  expanded: Record<string, boolean> = {};

  getFieldIcon(fieldContent: any) {
    if (typeof fieldContent === 'string') {
      return 'format_bold';
    } else if (typeof fieldContent === 'boolean') {
      return 'done';
    } else {
      return '123';
    }
  }

  getEntries(value: any): any[] {
    if (this.isFieldExpandable(value)) {
      return Object.entries(value);
    }
    return [value];
  }

  toggleSectionExpansion(key: string) {
    console.log(key);
    console.log(this.expanded);

    this.expanded = { ...this.expanded, [key]: !this.expanded[key] };
    console.log(this.expanded);
  }

  isExpanded(sectionKey: any) {
    return this.expanded[sectionKey];
  }

  isFieldExpandable(value: any): boolean {
    return typeof value === 'object';
  }
}
