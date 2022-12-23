import { CommonModule } from '@angular/common';
import { ConfigFieldComponent } from './ui/config-field/config-field.component';
import { ConfigSectionComponent } from './feature/config-section/config-section.component';
import { EditorContainerComponent } from './feature/editor-container/editor-container.component';
import { EditorRoutingModule } from './editor-routing.module';
import { MatTreeModule } from '@angular/material/tree';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EditorContainerComponent, ConfigFieldComponent, ConfigSectionComponent],
  imports: [CommonModule, EditorRoutingModule, SharedModule, MatTreeModule, SharedModule],
})
export class EditorModule {}
