import { BehaviorSubject, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Material } from '../../enums/material.enum';

@Component({
  selector: 'app-minecraft-material-autocomplete',
  templateUrl: './minecraft-material-autocomplete.component.html',
  styleUrls: ['./minecraft-material-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinecraftMaterialAutocompleteComponent {
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
