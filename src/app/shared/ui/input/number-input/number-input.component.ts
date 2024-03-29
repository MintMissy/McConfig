import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: 'app-number-input',
	templateUrl: './number-input.component.html',
	styleUrls: ['./number-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInputComponent extends BaseInputComponent<number> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onValueChange(value: any): void {
		this.valueChange.emit(Math.floor(value));
	}
}
