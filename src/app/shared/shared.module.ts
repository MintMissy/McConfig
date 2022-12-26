import { BreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { EntriesPipe } from './pipe/entries.pipe';
import { FooterComponent } from './ui/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { IconButtonComponent } from './ui/icon-button/icon-button.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { TypeOfPipe } from './pipe/types/type-of.pipe';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, BreadcrumbComponent, IconButtonComponent, EntriesPipe, TypeOfPipe],
  exports: [
    NavbarComponent,
    FooterComponent,
    BreadcrumbComponent,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    IconButtonComponent,
    EntriesPipe,
    TypeOfPipe,
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
