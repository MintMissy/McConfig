import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AutoResizeInputDirective } from './directives/autoresize-input.directive';
import { EntriesPipe } from './pipe/entries.pipe';
import { IsStringifiedNumberPipe } from './pipe/is-stringified-number.pipe';
import { TypeOfPipe } from './pipe/type-of.pipe';
import { IconButtonComponent } from './ui/icon-button/icon-button.component';
import { BooleanInputComponent } from './ui/input/boolean-input/boolean-input.component';
import { FileInputComponent } from './ui/input/file-input/file-input.component';
import { NumberInputComponent } from './ui/input/number-input/number-input.component';
import { StringInputComponent } from './ui/input/string-input/string-input.component';
@NgModule({
	declarations: [
		IconButtonComponent,
		EntriesPipe,
		TypeOfPipe,
		BooleanInputComponent,
		StringInputComponent,
		NumberInputComponent,
		FileInputComponent,
		IsStringifiedNumberPipe,
  AutoResizeInputDirective,
  
	],
	exports: [
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
		MatTooltipModule,
		MatMenuModule,
		IsStringifiedNumberPipe,
  AutoResizeInputDirective,
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
		MatTooltipModule,
		MatMenuModule,
	],
})
export class SharedModule {}
