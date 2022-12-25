import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editor-header',
  templateUrl: './editor-header.component.html',
  styleUrls: ['./editor-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorHeaderComponent {
  
  @Input() fileName = '';

  @Output() save = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
}
