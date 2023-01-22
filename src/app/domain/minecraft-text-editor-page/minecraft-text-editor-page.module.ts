import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TextEditorPageComponent } from './feature/text-editor-page/text-editor-page.component';
import { MinecraftTextEditorRoutingModule } from './minecraft-text-editor-routing.module';


@NgModule({
  declarations: [
    TextEditorPageComponent
  ],
  imports: [
    CommonModule,
    MinecraftTextEditorRoutingModule
  ]
})
export class MinecraftTextEditorPageModule { }
