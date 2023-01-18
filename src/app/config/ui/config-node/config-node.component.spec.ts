import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialInputComponent } from 'src/app/minecraft/ui/material-input/material-input.component';
import { IsStringifiedNumberPipe } from 'src/app/shared/pipe/is-stringified-number.pipe';
import { TypeOfPipe } from 'src/app/shared/pipe/type-of.pipe';
import { BooleanInputComponent } from 'src/app/shared/ui/input/boolean-input/boolean-input.component';
import { NumberInputComponent } from 'src/app/shared/ui/input/number-input/number-input.component';
import { StringInputComponent } from 'src/app/shared/ui/input/string-input/string-input.component';
import { LastPathKeyPipe } from '../../pipe/path/last-path-key.pipe';
import { ConfigNodeMenuComponent } from '../config-node-menu/config-node-menu.component';

import { ConfigNodeComponent } from './config-node.component';

describe('ConfigNodeComponent', () => {
	let component: ConfigNodeComponent;
	let fixture: ComponentFixture<ConfigNodeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				ConfigNodeComponent,
				IsStringifiedNumberPipe,
				LastPathKeyPipe,
				TypeOfPipe,
				NumberInputComponent,
				BooleanInputComponent,
				MaterialInputComponent,
				StringInputComponent,
				ConfigNodeMenuComponent,
			],
			imports: [MatMenuModule, FormsModule]
		}).compileComponents();

		fixture = TestBed.createComponent(ConfigNodeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
