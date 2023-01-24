import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const materialModules = [
	MatIconModule,
	MatButtonModule,
	MatToolbarModule,
	MatCardModule,
	MatAutocompleteModule,
	MatDividerModule,
	MatInputModule,
	MatTooltipModule,
	MatMenuModule,
	MatChipsModule,
];

@NgModule({
	imports: [materialModules],
	exports: [materialModules],
})
export class MaterialModule {}
