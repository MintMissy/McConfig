import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { StringInputComponent } from './string-input.component';

describe('StringInputComponent', () => {
	let component: StringInputComponent;
	let fixture: ComponentFixture<StringInputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StringInputComponent],
			imports: [FormsModule]
		}).compileComponents();

		fixture = TestBed.createComponent(StringInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
