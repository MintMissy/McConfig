import { BreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component';
import { CombinePathPipe } from './pipe/path/combine-path.pipe';
import { CommonModule } from '@angular/common';
import { EntriesPipe } from './pipe/entries.pipe';
import { FooterComponent } from './ui/footer/footer.component';
import { FormatConfigKeyPipe } from './pipe/format-config-key.pipe';
import { FormsModule } from '@angular/forms';
import { IconButtonComponent } from './ui/icon-button/icon-button.component';
import { LastPathKeyPipe } from './pipe/path/last-path-key.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { TypeIconPipe } from './pipe/types/type-icon.pipe';
import { TypeOfPipe } from './pipe/types/type-of.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FormatConfigKeyPipe,
    BreadcrumbComponent,
    LastPathKeyPipe,
    IconButtonComponent,
    EntriesPipe,
    TypeOfPipe,
    CombinePathPipe,
    TypeIconPipe,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    FormatConfigKeyPipe,
    BreadcrumbComponent,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    LastPathKeyPipe,
    IconButtonComponent,
    EntriesPipe,
    TypeOfPipe,
    CombinePathPipe,
    TypeIconPipe,
    MatAutocompleteModule,
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
