import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StringInputComponent extends BaseInputComponent<string> {
  onValueChange(value: any): string {
    throw new Error('Method not implemented.');
  }
}
