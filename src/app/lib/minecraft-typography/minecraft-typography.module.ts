import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinecraftTextDirective } from './directives/minecraft-text.directive';
import { ColorCodePipe } from './pipe/color-code/color-code.pipe';
import { HexColorCodePipe } from './pipe/hex-color-code/hex-color-code.pipe';
import { MiniMessagePipe } from './pipe/mini-message/mini-message.pipe';
import { MinecraftTextPreviewComponent } from './ui/minecraft-text-preview/minecraft-text-preview.component';

@NgModule({
	declarations: [
		MiniMessagePipe,
		ColorCodePipe,
		HexColorCodePipe,
		MinecraftTextDirective,
		MinecraftTextPreviewComponent,
	],
	imports: [CommonModule],
	exports: [MiniMessagePipe, ColorCodePipe, HexColorCodePipe, MinecraftTextDirective, MinecraftTextPreviewComponent],
})
export class MinecraftTypographyModule {}
