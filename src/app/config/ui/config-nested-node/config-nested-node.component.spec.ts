import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNestedNodeComponent } from './config-nested-node.component';

describe('ConfigNestedNodeComponent', () => {
	let component: ConfigNestedNodeComponent;
	let fixture: ComponentFixture<ConfigNestedNodeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ConfigNestedNodeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ConfigNestedNodeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
