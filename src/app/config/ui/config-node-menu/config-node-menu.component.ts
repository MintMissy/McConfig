import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-config-node-menu',
  templateUrl: './config-node-menu.component.html',
  styleUrls: ['./config-node-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigNodeMenuComponent {
  @Input() hasAddSubKeyOption = true;
	@Input() iconSize = '20px';

  @Output() clone = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
  @Output() addSubKey = new EventEmitter<void>();
}
