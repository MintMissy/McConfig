import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-config-node',
  templateUrl: './config-node.component.html',
  styleUrls: ['./config-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigNodeComponent {
  @Input() path = 'path';
  @Input() value: any = '';
  @Input() iconSize = '1.5rem';

  @Output() valueChange = new EventEmitter<{ path: string; value: any }>();
}
