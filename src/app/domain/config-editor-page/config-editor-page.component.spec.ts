import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEditorPageComponent } from './config-editor-page.component';

describe('ConfigEditorPageComponent', () => {
	let component: ConfigEditorPageComponent;
	let fixture: ComponentFixture<ConfigEditorPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ConfigEditorPageComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ConfigEditorPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
