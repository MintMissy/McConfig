import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsConfiguratorPageRoutingModule } from './items-configurator-page-routing.module';
import { ItemsConfiguratorPageComponent } from './items-configurator-page.component';


@NgModule({
  declarations: [
    ItemsConfiguratorPageComponent
  ],
  imports: [
    CommonModule,
    ItemsConfiguratorPageRoutingModule
  ]
})
export class ItemsConfiguratorPageModule { }
