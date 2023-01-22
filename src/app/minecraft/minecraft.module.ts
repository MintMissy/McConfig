import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IsMaterialPipe } from './pipe/is-material.pipe';
import { MaterialInputComponent } from './ui/material-input/material-input.component';


@NgModule({
	imports: [CommonModule, SharedModule, FormsModule],
	declarations: [
		MaterialInputComponent,
		IsMaterialPipe,
	],
	exports: [
		MaterialInputComponent,
		IsMaterialPipe,
	],
})
export class MinecraftModule {}
