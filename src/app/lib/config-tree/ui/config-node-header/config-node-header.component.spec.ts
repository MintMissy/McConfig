import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { IsStringifiedNumberPipe } from 'src/app/shared/pipe/is-stringified-number.pipe';
import { LastPathKeyPipe } from '../../pipe/path/last-path-key.pipe';
import { ConfigNodeMenuComponent } from '../config-node-menu/config-node-menu.component';

import { ConfigNodeHeaderComponent } from './config-node-header.component';

describe('ConfigNodeHeaderComponent', () => {
	let component: ConfigNodeHeaderComponent;
	let fixture: ComponentFixture<ConfigNodeHeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ConfigNodeHeaderComponent, IsStringifiedNumberPipe, ConfigNodeMenuComponent, LastPathKeyPipe],
			imports: [MatIconModule, MatMenuModule],
		}).compileComponents();

		fixture = TestBed.createComponent(ConfigNodeHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
