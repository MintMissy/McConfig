import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigEditorPageComponent } from './config-editor-page.component';

const routes: Routes = [{ path: '', component: ConfigEditorPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ConfigEditorPageRoutingModule {}
