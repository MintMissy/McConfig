import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigEditorPageRoutingModule } from './config-editor-page-routing.module';
import { ConfigEditorPageComponent } from './config-editor-page.component';


@NgModule({
  declarations: [
    ConfigEditorPageComponent
  ],
  imports: [
    CommonModule,
    ConfigEditorPageRoutingModule
  ]
})
export class ConfigEditorPageModule { }
