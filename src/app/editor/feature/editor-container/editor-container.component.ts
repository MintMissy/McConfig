import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-editor-container',
  templateUrl: './editor-container.component.html',
  styleUrls: ['./editor-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorContainerComponent {
  name = '&eRusty &a&lHa&rm&kmer';
  lore: string[] = ['&7Damage: 12', '&7Defe&mnse: 12', '&#123456789abcdef'];
}
