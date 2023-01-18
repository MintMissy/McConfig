import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { LastPathKeyPipe } from '../../pipe/path/last-path-key.pipe';

import { ConfigNodeMenuComponent } from './config-node-menu.component';

describe('ConfigNodeMenuComponent', () => {
	let component: ConfigNodeMenuComponent;
	let fixture: ComponentFixture<ConfigNodeMenuComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ConfigNodeMenuComponent, LastPathKeyPipe],
			imports: [MatMenuModule],
		}).compileComponents();

		fixture = TestBed.createComponent(ConfigNodeMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
