import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-config-nested-node',
  templateUrl: './config-nested-node.component.html',
  styleUrls: ['./config-nested-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigNestedNodeComponent {
  @Input() path = '';
  @Input() configEntries: any[][] = [];
  @Input() expandedPaths: { [path: string]: boolean } | null = {};
  @Input() root = false;

  @Output() expandToggle = new EventEmitter<{ path: string }>();
  @Output() fieldValueChange = new EventEmitter<{ path: string; value: any }>();

  combinePath(key: string): string {
    if (this.root) {
      return key;
    }
    return this.path + '.' + key;
  }

  isExpandable(value: any): boolean {
    return typeof value === 'object';
  }

  getFieldType(value: any) {
    return typeof value;
  }

  getEntries(value: any): any[] {
    if (this.isFieldExpandable(value)) {
      return Object.entries(value);
    }
    return [value];
  }

  isFieldExpandable(value: any): boolean {
    return typeof value === 'object';
  }
}
