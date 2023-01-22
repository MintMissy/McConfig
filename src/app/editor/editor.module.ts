import { CommonModule } from '@angular/common';
import { EditorComponent } from './feature/editor/editor.component';
import { EditorHeaderComponent } from './ui/editor-header/editor-header.component';
import { EditorRoutingModule } from './editor-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConfigModule } from '../config/config.module';

@NgModule({
	declarations: [EditorComponent, EditorHeaderComponent],
	imports: [CommonModule, EditorRoutingModule, SharedModule, FormsModule, ConfigModule],
})
export class EditorModule {}
