import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-file-input',
	templateUrl: './file-input.component.html',
	styleUrls: ['./file-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileInputComponent {
	@Input() icon!: string;
	@Input() text!: string;
	@Input() classes = '';
	@Input() accept = '';

	@Output() fileUpload = new EventEmitter<Event>();
}
