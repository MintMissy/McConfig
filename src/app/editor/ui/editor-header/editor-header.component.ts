import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { SafeValue } from '@angular/platform-browser';

@Component({
  selector: 'app-editor-header',
  templateUrl: './editor-header.component.html',
  styleUrls: ['./editor-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorHeaderComponent {
  @Input() fileName = '';
  @Input() downloadLink!: SafeValue;

  @Output() delete = new EventEmitter<void>();
}
