import { CommonModule } from '@angular/common';
import { ConfigFieldComponent } from './ui/config-field/config-field.component';
import { ConfigSectionNestedNodeComponent } from './feature/config-section-nested-node/config-section-nested-node.component';
import { ConfigSectionNodeComponent } from './ui/config-section-node/config-section-node.component';
import { ConfigSectionTreeComponent } from './feature/config-section-tree/config-section-tree.component';
import { EditorContainerComponent } from './feature/editor-container/editor-container.component';
import { EditorRoutingModule } from './editor-routing.module';
import { MatTreeModule } from '@angular/material/tree';
import { NgModule } from '@angular/core';
import { SectionHeaderComponent } from './ui/section-header/section-header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EditorContainerComponent,
    ConfigFieldComponent,
    SectionHeaderComponent,
    ConfigSectionTreeComponent,
    ConfigSectionNodeComponent,
    ConfigSectionNestedNodeComponent,
  ],
  imports: [CommonModule, EditorRoutingModule, SharedModule, MatTreeModule, SharedModule],
})
export class EditorModule {}
