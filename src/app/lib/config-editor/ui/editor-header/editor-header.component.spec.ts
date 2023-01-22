import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { IconButtonComponent } from 'src/app/shared/ui/icon-button/icon-button.component';

import { EditorHeaderComponent } from './editor-header.component';

describe('EditorHeaderComponent', () => {
	let component: EditorHeaderComponent;
	let fixture: ComponentFixture<EditorHeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EditorHeaderComponent, IconButtonComponent],
			imports: [MatIconModule],
		}).compileComponents();

		fixture = TestBed.createComponent(EditorHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
