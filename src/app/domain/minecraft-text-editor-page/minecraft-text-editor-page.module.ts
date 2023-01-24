import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from 'src/app/lib/material/material.module';
import { MinecraftTypographyModule } from '../../lib/minecraft-typography/minecraft-typography.module';
import { TextEditorPageComponent } from './feature/text-editor-page/text-editor-page.component';
import { MinecraftTextEditorRoutingModule } from './minecraft-text-editor-routing.module';

@NgModule({
	declarations: [TextEditorPageComponent],
	imports: [CommonModule, MinecraftTextEditorRoutingModule, MinecraftTypographyModule, MaterialModule],
})
export class MinecraftTextEditorPageModule {}
