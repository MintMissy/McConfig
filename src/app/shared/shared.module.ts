import { BooleanInputComponent } from './ui/input/boolean-input/boolean-input.component';
import { CommonModule } from '@angular/common';
import { EntriesPipe } from './pipe/entries.pipe';
import { FileInputComponent } from './ui/input/file-input/file-input.component';
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
import { NumberInputComponent } from './ui/input/number-input/number-input.component';
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
		NumberInputComponent,
		FileInputComponent,
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
		NumberInputComponent,
		FileInputComponent,
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
