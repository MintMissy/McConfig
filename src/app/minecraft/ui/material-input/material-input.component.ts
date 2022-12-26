import { BehaviorSubject, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Material } from '../../enums/material.enum';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialInputComponent {
  input = new BehaviorSubject<string>('');
  inputContent = '';

  autocomplete$ = this.input.pipe(
    distinctUntilChanged(),
    debounceTime(100),
    map(() =>
      Object.values(Material).filter((material) => material.toLowerCase().includes(this.input.getValue().toLowerCase()))
    ),
    map((value) => value.slice(0, 30))
  );

  onChange(inputContent: string) {
    this.input.next(inputContent);
  }

  canShowIcon() {
    return Object.values(Material).includes(this.input.getValue() as Material);
  }
}
