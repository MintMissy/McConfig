import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'app-integer-input',
  templateUrl: './integer-input.component.html',
  styleUrls: ['./integer-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegerInputComponent extends BaseInputComponent<number> {
  onValueChange(value: any): number {
    throw new Error('Method not implemented.');
  }
}
