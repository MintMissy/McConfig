import { CommonModule } from '@angular/common';
import { ConfigModule } from '../config/config.module';
import { EditorComponent } from './feature/editor/editor.component';
import { EditorHeaderComponent } from './ui/editor-header/editor-header.component';
import { EditorRoutingModule } from './editor-routing.module';
import { FormsModule } from '@angular/forms';
import { MinecraftModule } from '../minecraft/minecraft.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EditorComponent, EditorHeaderComponent],
  imports: [CommonModule, EditorRoutingModule, SharedModule, FormsModule, MinecraftModule, ConfigModule],
})
export class EditorModule {}
