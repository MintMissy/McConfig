import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EditorContainerComponent } from './feature/editor-container/editor-container.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: EditorContainerComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule {}
