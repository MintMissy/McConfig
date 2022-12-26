import { BooleanInputComponent } from './ui/input/boolean-input/boolean-input.component';
import { CommonModule } from '@angular/common';
import { DoubleInputComponent } from './ui/input/double-input/double-input.component';
import { EntriesPipe } from './pipe/entries.pipe';
import { FooterComponent } from './ui/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { IconButtonComponent } from './ui/icon-button/icon-button.component';
import { IntegerInputComponent } from './ui/input/integer-input/integer-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { StrictTypeOfPipe } from './pipe/strict-type-of.pipe';
import { StringInputComponent } from './ui/input/string-input/string-input.component';
import { TypeOfPipe } from './pipe/type-of.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    IconButtonComponent,
    EntriesPipe,
    TypeOfPipe,
    BooleanInputComponent,
    StringInputComponent,
    IntegerInputComponent,
    DoubleInputComponent,
    StrictTypeOfPipe,
  ],
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
    BooleanInputComponent,
    StringInputComponent,
    IntegerInputComponent,
    DoubleInputComponent,
    StrictTypeOfPipe,
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
