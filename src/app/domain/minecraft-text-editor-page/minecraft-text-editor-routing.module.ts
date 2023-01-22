import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextEditorPageComponent } from './feature/text-editor-page/text-editor-page.component';

const routes: Routes = [{ path: '', component: TextEditorPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MinecraftTextEditorRoutingModule {}
