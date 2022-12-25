import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-config-section-node',
  templateUrl: './config-section-node.component.html',
  styleUrls: ['./config-section-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigSectionNodeComponent {
  @Input() path = 'path';
  @Input() value = '';
  @Input() valueType!: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
  @Input() iconSize = '1.5rem';

  getFieldIcon(){
    if (this.valueType === 'string') {
      return 'format_bold';
    } else if (this.valueType === 'boolean') {
      return 'done';
    } else {
      return '123';
    }
  }
}
