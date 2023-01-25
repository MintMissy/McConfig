import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../lib/material/material.module';
import { AutoResizeInputDirective } from './directives/autoresize-input.directive';
import { EntriesPipe } from './pipe/entries.pipe';
import { IsStringifiedNumberPipe } from './pipe/is-stringified-number.pipe';
import { TypeOfPipe } from './pipe/type-of.pipe';
import { IconButtonComponent } from './ui/icon-button/icon-button.component';
import { BooleanInputComponent } from './ui/input/boolean-input/boolean-input.component';
import { FileInputComponent } from './ui/input/file-input/file-input.component';
import { NumberInputComponent } from './ui/input/number-input/number-input.component';
import { StringInputComponent } from './ui/input/string-input/string-input.component';
import { SplitPipe } from './pipe/split.pipe';
@NgModule({
	declarations: [
		// Components
		IconButtonComponent,
		BooleanInputComponent,
		StringInputComponent,
		NumberInputComponent,
		FileInputComponent,
		// Pipes
		EntriesPipe,
		TypeOfPipe,
		IsStringifiedNumberPipe,
		// Directives
		AutoResizeInputDirective,
  SplitPipe,
	],
	imports: [CommonModule, MaterialModule, FormsModule],
	exports: [
		MaterialModule,
		// Components
		IconButtonComponent,
		BooleanInputComponent,
		StringInputComponent,
		NumberInputComponent,
		FileInputComponent,
		// Pipes
		EntriesPipe,
		TypeOfPipe,
		IsStringifiedNumberPipe,
		// Directives
		AutoResizeInputDirective,
  SplitPipe,
	],
})
export class SharedModule {}
