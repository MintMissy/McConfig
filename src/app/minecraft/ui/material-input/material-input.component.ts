import { BehaviorSubject, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BaseInputComponent } from 'src/app/shared/ui/input/base-input.component';
import { Material } from '../../enums/material.enum';

@Component({
	selector: 'app-material-input',
	templateUrl: './material-input.component.html',
	styleUrls: ['./material-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialInputComponent extends BaseInputComponent<Material> implements OnInit {
	value$ = new BehaviorSubject<string>(this.value === undefined ? '' : this.value);
	autocomplete$ = this.value$.pipe(
		distinctUntilChanged(),
		debounceTime(100),
		map(() =>
			Object.values(Material).filter((material) =>
				material.toLowerCase().includes(this.value$.getValue().toLowerCase())
			)
		),
		map((value) => value.slice(0, 30))
	);

	ngOnInit(): void {
		this.value$.next(this.value);
	}

	onChange(inputContent: string) {
		this.value$.next(inputContent);
	}

	onValueChange(value?: any): void {
		this.value$.next(value);
		this.valueChange.emit(value);
	}
}
