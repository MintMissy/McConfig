import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsConfiguratorPageComponent } from './items-configurator-page.component';

const routes: Routes = [{ path: '', component: ItemsConfiguratorPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ItemsConfiguratorPageRoutingModule {}
