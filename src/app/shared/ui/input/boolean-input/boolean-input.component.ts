import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseInputComponent } from '../base-input.component';

@Component({
	selector: 'app-boolean-input',
	templateUrl: './boolean-input.component.html',
	styleUrls: ['./boolean-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooleanInputComponent extends BaseInputComponent<boolean> {
	onValueChange(): void {
		this.valueChange.emit(!this.value);
	}
}
