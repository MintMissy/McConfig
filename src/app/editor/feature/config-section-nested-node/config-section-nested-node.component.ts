import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-config-section-nested-node',
  templateUrl: './config-section-nested-node.component.html',
  styleUrls: ['./config-section-nested-node.component.scss']
})
export class ConfigSectionNestedNodeComponent {
  @Input() path = '';
  @Input() configEntries: any[][] = [];
  @Input() expanded = false;
  @Input() root = false;

  @Output() expandToggle = new EventEmitter<{path: string}>();
  @Output() fieldValueChange = new EventEmitter<{path: string, value: any}>();

  combinePath(key: string):string{
    if (this.root) {
      return key;
    }
    return this.path + '.' + key;
  }

  isExpandable(value: any): boolean {
    return typeof value === 'object';
  }

  getFieldType(value: any){
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
