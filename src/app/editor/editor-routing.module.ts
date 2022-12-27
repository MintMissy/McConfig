import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EditorComponent } from './feature/editor/editor.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: EditorComponent }];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EditorRoutingModule {}
