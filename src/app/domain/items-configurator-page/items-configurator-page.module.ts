import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from 'src/app/lib/material/material.module';
import { ItemsConfiguratorPageRoutingModule } from './items-configurator-page-routing.module';
import { ItemsConfiguratorPageComponent } from './items-configurator-page.component';

@NgModule({
	declarations: [ItemsConfiguratorPageComponent],
	imports: [CommonModule, ItemsConfiguratorPageRoutingModule, MaterialModule],
})
export class ItemsConfiguratorPageModule {}
