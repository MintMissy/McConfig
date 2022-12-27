import { CombinePathPipe } from './pipe/path/combine-path.pipe';
import { CommonModule } from '@angular/common';
import { ConfigNestedNodeComponent } from './ui/config-nested-node/config-nested-node.component';
import { ConfigNodeComponent } from './ui/config-node/config-node.component';
import { ConfigNodeHeaderComponent } from './ui/config-node-header/config-node-header.component';
import { ConfigTreeComponent } from './feature/config-tree/config-tree.component';
import { FormsModule } from '@angular/forms';
import { LastPathKeyPipe } from './pipe/path/last-path-key.pipe';
import { MinecraftModule } from '../minecraft/minecraft.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TypeIconPipe } from './pipe/type-icon.pipe';
import { ConfigNodeMenuComponent } from './ui/config-node-menu/config-node-menu.component';

@NgModule({
	imports: [CommonModule, SharedModule, FormsModule, MinecraftModule],
	declarations: [
		ConfigNodeHeaderComponent,
		ConfigTreeComponent,
		ConfigNodeComponent,
		ConfigNestedNodeComponent,
		LastPathKeyPipe,
		CombinePathPipe,
		TypeIconPipe,
  ConfigNodeMenuComponent,
	],
	exports: [
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
