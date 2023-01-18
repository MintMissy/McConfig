import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { IconButtonComponent } from './icon-button.component';

describe('IconButtonComponent', () => {
	let component: IconButtonComponent;
	let fixture: ComponentFixture<IconButtonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [IconButtonComponent],
			imports: [MatIconModule]
		}).compileComponents();

		fixture = TestBed.createComponent(IconButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
