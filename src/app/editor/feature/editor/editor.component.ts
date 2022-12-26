import { ChangeDetectionStrategy, Component } from '@angular/core';

import { JSON_DATA } from '../../utility/data-schema';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {
  fileName = 'item.yml';
  configuration = JSON_DATA;

  name = '&eRusty &a&lHa&rm&kmer';
  lore: string[] = ['&7Damage: 12', '&7Defe&mnse: 12', '&#123456789abcdef'];

  onDelete() {
    throw new Error('Method not implemented.');
  }

  onSave() {
    throw new Error('Method not implemented.');
  }
}
