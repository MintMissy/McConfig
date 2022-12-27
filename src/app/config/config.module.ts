import { CombinePathPipe } from './pipe/path/combine-path.pipe';
import { CommonModule } from '@angular/common';
import { ConfigFieldComponent } from './ui/config-field/config-field.component';
import { ConfigNestedNodeComponent } from './ui/config-nested-node/config-nested-node.component';
import { ConfigNodeComponent } from './ui/config-node/config-node.component';
import { ConfigNodeHeaderComponent } from './ui/config-node-header/config-node-header.component';
import { ConfigTreeComponent } from './feature/config-tree/config-tree.component';
import { FileServiceFactory } from './service/file-service-factory.service';
import { FormsModule } from '@angular/forms';
import { LastPathKeyPipe } from './pipe/path/last-path-key.pipe';
import { MinecraftModule } from '../minecraft/minecraft.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TypeIconPipe } from './pipe/type-icon.pipe';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, MinecraftModule],
  declarations: [
    ConfigFieldComponent,
    ConfigNodeHeaderComponent,
    ConfigTreeComponent,
    ConfigNodeComponent,
    ConfigNestedNodeComponent,
    LastPathKeyPipe,
    CombinePathPipe,
    TypeIconPipe,
  ],
  exports: [
    ConfigFieldComponent,
    ConfigNodeHeaderComponent,
    ConfigTreeComponent,
    ConfigNodeComponent,
    ConfigNestedNodeComponent,
    LastPathKeyPipe,
    CombinePathPipe,
    TypeIconPipe,
  ],
})
export class ConfigModule {}
