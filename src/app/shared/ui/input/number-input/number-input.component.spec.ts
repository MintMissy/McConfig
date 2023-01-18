import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
	let component: NumberInputComponent;
	let fixture: ComponentFixture<NumberInputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NumberInputComponent],
			imports: [FormsModule],
		}).compileComponents();

		fixture = TestBed.createComponent(NumberInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
