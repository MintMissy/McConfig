import { ColorCodePipe } from './pipe/minecraft-text/color-code/color-code.pipe';
import { CommonModule } from '@angular/common';
import { HexColorCodePipe } from './pipe/minecraft-text/hex-color-code/hex-color-code.pipe';
import { MaterialInputComponent } from './ui/material-input/material-input.component';
import { MinecraftTextDirective } from './directives/minecraft-text.directive';
import { MinecraftTextPreviewComponent } from './ui/minecraft-text-preview/minecraft-text-preview.component';
import { MiniMessagePipe } from './pipe/minecraft-text/mini-message/mini-message.pipe';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MinecraftTextPreviewComponent,
    MaterialInputComponent,
    MinecraftTextDirective,
    MiniMessagePipe,
    ColorCodePipe,
    HexColorCodePipe,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MinecraftTextPreviewComponent,
    MaterialInputComponent,
    MinecraftTextDirective,
    MiniMessagePipe,
    ColorCodePipe,
    HexColorCodePipe,
  ]
})
export class MinecraftModule { }
