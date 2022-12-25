import { BreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component';
import { ColorCodePipe } from './pipe/minecraft-text/color-code/color-code.pipe';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './ui/footer/footer.component';
import { FormatConfigKeyPipe } from './pipe/format-config-key.pipe';
import { FormsModule } from '@angular/forms';
import { HexColorCodePipe } from './pipe/minecraft-text/hex-color-code/hex-color-code.pipe';
import { IconButtonComponent } from './ui/icon-button/icon-button.component';
import { LastPathKeyPipe } from './pipe/last-path-key.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialInputComponent } from './ui/material-input/material-input.component';
import { MinecraftTextDirective } from './directives/minecraft-text.directive';
import { MinecraftTextPreviewComponent } from './ui/minecraft-text-preview/minecraft-text-preview.component';
import { MiniMessagePipe } from './pipe/minecraft-text/mini-message/mini-message.pipe';
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
    MaterialInputComponent,
    FormatConfigKeyPipe,
    BreadcrumbComponent,
    LastPathKeyPipe,
    IconButtonComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MinecraftTextDirective,
    MinecraftTextPreviewComponent,
    MiniMessagePipe,
    ColorCodePipe,
    HexColorCodePipe,
    MaterialInputComponent,
    FormatConfigKeyPipe,
    BreadcrumbComponent,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    LastPathKeyPipe,
    IconButtonComponent,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class SharedModule {}
