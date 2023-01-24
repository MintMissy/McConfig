import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigTreeModule } from '../config-tree/config-tree.module';
import { FileParserModule } from '../file-parser/file-parser.module';
import { EditorComponent } from './feature/editor/editor.component';
import { EditorHeaderComponent } from './ui/editor-header/editor-header.component';

@NgModule({
	declarations: [EditorComponent, EditorHeaderComponent],
	exports: [EditorComponent],
	imports: [CommonModule, SharedModule, FormsModule, ConfigTreeModule, FileParserModule],
})
export class ConfigEditorModule {}
