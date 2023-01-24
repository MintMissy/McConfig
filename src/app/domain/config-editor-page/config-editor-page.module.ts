import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigEditorPageRoutingModule } from './config-editor-page-routing.module';
import { ConfigEditorPageComponent } from './config-editor-page.component';
import { ConfigEditorModule } from "../../lib/config-editor/config-editor.module";


@NgModule({
    declarations: [
        ConfigEditorPageComponent
    ],
    imports: [
        CommonModule,
        ConfigEditorPageRoutingModule,
        ConfigEditorModule
    ]
})
export class ConfigEditorPageModule { }
