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
import { BooleanInputComponent } from './ui/input/boolean-input/boolean-input.component';
import { StringInputComponent } from './ui/input/string-input/string-input.component';
import { IntegerInputComponent } from './ui/input/integer-input/integer-input.component';
import { DoubleInputComponent } from './ui/input/double-input/double-input.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, IconButtonComponent, EntriesPipe, TypeOfPipe, BooleanInputComponent, StringInputComponent, IntegerInputComponent, DoubleInputComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
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
