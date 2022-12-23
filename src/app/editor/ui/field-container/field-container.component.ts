import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-field-container',
  templateUrl: './field-container.component.html',
  styleUrls: ['./field-container.component.scss'],
})
export class FieldContainerComponent {
  @Input() icon!: string;
  @Input() iconSize = '1.5rem';
  @Input() key = 'Key';
}
