import { ColorCodePipe } from './pipe/minecraft-text/color-code.pipe';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './ui/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HexColorCodePipe } from './pipe/minecraft-text/hex-color-code.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MinecraftMaterialAutocompleteComponent } from './ui/minecraft-material-autocomplete/minecraft-material-autocomplete.component';
import { MinecraftTextDirective } from './directives/minecraft-text.directive';
import { MinecraftTextPreviewComponent } from './ui/minecraft-text-preview/minecraft-text-preview.component';
import { MiniMessagePipe } from './pipe/minecraft-text/mini-message.pipe';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { FormatConfigKeyPipe } from './pipe/format-config-key.pipe';
import { BreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MinecraftTextDirective,
    MinecraftTextPreviewComponent,
    MiniMessagePipe,
    ColorCodePipe,
    HexColorCodePipe,
    MinecraftMaterialAutocompleteComponent,
    FormatConfigKeyPipe,
    BreadcrumbComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MinecraftTextDirective,
    MinecraftTextPreviewComponent,
    MiniMessagePipe,
    ColorCodePipe,
    HexColorCodePipe,
    MinecraftMaterialAutocompleteComponent,
    FormatConfigKeyPipe,
  ],
  imports: [CommonModule, MatAutocompleteModule, MatInputModule, MatIconModule, FormsModule],
})
export class SharedModule {}
