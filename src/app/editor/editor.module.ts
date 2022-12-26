import { CommonModule } from '@angular/common';
import { ConfigFieldComponent } from './ui/config-field/config-field.component';
import { ConfigNestedNodeComponent } from './ui/config-nested-node/config-nested-node.component';
import { ConfigNodeComponent } from './ui/config-node/config-node.component';
import { ConfigNodeHeaderComponent } from './ui/config-node-header/config-node-header.component';
import { ConfigTreeComponent } from './feature/config-tree/config-tree.component';
import { EditorComponent } from './feature/editor/editor.component';
import { EditorHeaderComponent } from './ui/editor-header/editor-header.component';
import { EditorRoutingModule } from './editor-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MinecraftModule } from '../minecraft/minecraft.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EditorComponent,
    ConfigFieldComponent,
    ConfigNodeHeaderComponent,
    ConfigTreeComponent,
    ConfigNodeComponent,
    ConfigNestedNodeComponent,
    EditorHeaderComponent,
  ],
  imports: [CommonModule, EditorRoutingModule, SharedModule, MatTreeModule, FormsModule, MinecraftModule],
})
export class EditorModule {}
