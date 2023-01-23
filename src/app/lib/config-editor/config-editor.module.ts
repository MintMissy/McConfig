import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditorComponent } from './feature/editor/editor.component';
import { EditorHeaderComponent } from './ui/editor-header/editor-header.component';

@NgModule({
	declarations: [EditorComponent, EditorHeaderComponent],
	imports: [CommonModule, SharedModule, FormsModule],
	exports: [EditorComponent],
})
export class ConfigEditorModule {}
