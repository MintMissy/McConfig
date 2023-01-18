import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntriesPipe } from 'src/app/shared/pipe/entries.pipe';
import { LastPathKeyPipe } from '../../pipe/path/last-path-key.pipe';
import { ConfigNestedNodeComponent } from '../../ui/config-nested-node/config-nested-node.component';

import { ConfigTreeComponent } from './config-tree.component';

describe('ConfigTreeComponent', () => {
	let component: ConfigTreeComponent;
	let fixture: ComponentFixture<ConfigTreeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ConfigTreeComponent, ConfigNestedNodeComponent, EntriesPipe, LastPathKeyPipe],
		}).compileComponents();

		fixture = TestBed.createComponent(ConfigTreeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
