import { CommonModule } from '@angular/common';
import { FooterComponent } from './ui/footer/footer.component';
import { MinecraftTextDirective } from './directives/minceraft-text.directive';
import { MinecraftTextPreviewComponent } from './ui/minecraft-text-preview/minecraft-text-preview.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, MinecraftTextDirective, MinecraftTextPreviewComponent],
  exports: [NavbarComponent, FooterComponent, MinecraftTextDirective, MinecraftTextPreviewComponent],
  imports: [CommonModule],
})
export class SharedModule {}
