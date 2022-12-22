import { ColorCodePipe } from './pipe/minecraft-text/color-code.pipe';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './ui/footer/footer.component';
import { HexColorCodePipe } from './pipe/minecraft-text/hex-color-code.pipe';
import { MinecraftTextDirective } from './directives/minecraft-text.directive';
import { MinecraftTextPreviewComponent } from './ui/minecraft-text-preview/minecraft-text-preview.component';
import { MiniMessagePipe } from './pipe/minecraft-text/mini-message.pipe';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MinecraftTextDirective,
    MinecraftTextPreviewComponent,
    MiniMessagePipe,
    ColorCodePipe,
    HexColorCodePipe,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MinecraftTextDirective,
    MinecraftTextPreviewComponent,
    MiniMessagePipe,
    ColorCodePipe,
    HexColorCodePipe,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
