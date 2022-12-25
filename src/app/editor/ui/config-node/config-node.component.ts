import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-config-node',
  templateUrl: './config-node.component.html',
  styleUrls: ['./config-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigNodeComponent {
  @Input() path = 'path';
  @Input() value = '';
  @Input() valueType!: 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
  @Input() iconSize = '1.5rem';

  name(event: any) {}

  getFieldIcon() {
    if (this.valueType === 'string') {
      return 'format_bold';
    } else if (this.valueType === 'boolean') {
      return 'done';
    } else {
      return '123';
    }
  }
}
