import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { FileInputComponent } from './file-input.component';

describe('FileInputComponent', () => {
	let component: FileInputComponent;
	let fixture: ComponentFixture<FileInputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FileInputComponent],
			imports: [FormsModule, MatIconModule]
		}).compileComponents();

		fixture = TestBed.createComponent(FileInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
