import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-container',
  templateUrl: './field-container.component.html',
  styleUrls: ['./field-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldContainerComponent {
  @Input() icon!: string;
  @Input() iconSize = '1.5rem';
  @Input() key = 'Key';
}
