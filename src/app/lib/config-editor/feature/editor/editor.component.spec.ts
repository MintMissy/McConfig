import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { LastPathKeyPipe } from 'src/app/config/pipe/path/last-path-key.pipe';
import { ConfigTreeComponent } from 'src/app/lib/config-tree/feature/config-tree/config-tree.component';
import { ConfigNestedNodeComponent } from 'src/app/lib/config-tree/ui/config-nested-node/config-nested-node.component';
import { FileServiceFactory } from 'src/app/lib/file-parser/service/file-service-factory.service';
import { EntriesPipe } from 'src/app/shared/pipe/entries.pipe';
import { FileInputComponent } from 'src/app/shared/ui/input/file-input/file-input.component';
import { EditorHeaderComponent } from '../../ui/editor-header/editor-header.component';

import { EditorComponent } from './editor.component';

describe('EditorComponent', () => {
	let component: EditorComponent;
	let fixture: ComponentFixture<EditorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				EditorComponent,
				EditorHeaderComponent,
				ConfigTreeComponent,
				ConfigNestedNodeComponent,
				FileInputComponent,
				EntriesPipe,
				LastPathKeyPipe,
			],
			providers: [FileServiceFactory],
			imports: [MatIconModule],
		}).compileComponents();

		fixture = TestBed.createComponent(EditorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
