import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-config-field',
	templateUrl: './config-field.component.html',
	styleUrls: ['./config-field.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigFieldComponent {
	@Input() description = '';
	@Input() name!: string;
	@Input() value!: string;

	@Output() valueChange = new EventEmitter<string>();
}
