import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/lib/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MinecraftTypographyModule } from '../../lib/minecraft-typography/minecraft-typography.module';
import { TextEditorPageComponent } from './feature/text-editor-page/text-editor-page.component';
import { TextEditorToolbarComponent } from './feature/text-editor-toolbar/text-editor-toolbar.component';
import { MinecraftTextEditorRoutingModule } from './minecraft-text-editor-routing.module';
import { ColorListComponent } from './ui/color-list/color-list.component';
import { ParsingMethodsListComponent } from './ui/parsing-methods-list/parsing-methods-list.component';
import { TypographyFormattingListComponent } from './ui/typography-formatting-list/typography-formatting-list.component';

@NgModule({
	declarations: [
		TextEditorPageComponent,
		ColorListComponent,
		ParsingMethodsListComponent,
		TextEditorToolbarComponent,
		TypographyFormattingListComponent,
	],
	imports: [
		CommonModule,
		MinecraftTextEditorRoutingModule,
		MinecraftTypographyModule,
		MaterialModule,
		FormsModule,
		SharedModule,
	],
})
export class MinecraftTextEditorPageModule {}
