import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-page-card',
  templateUrl: './sub-page-card.component.html',
  styleUrls: ['./sub-page-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubPageCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
}
