import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-config-node-menu',
  templateUrl: './config-node-menu.component.html',
  styleUrls: ['./config-node-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigNodeMenuComponent {
  @Output() clone = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
  @Output() addSubKey = new EventEmitter<void>();
}
