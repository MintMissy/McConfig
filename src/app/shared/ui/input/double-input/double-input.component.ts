import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'app-double-input',
  templateUrl: './double-input.component.html',
  styleUrls: ['./double-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoubleInputComponent extends BaseInputComponent<number> {
  onValueChange(value: any): number {
    throw new Error('Method not implemented.');
  }

}
