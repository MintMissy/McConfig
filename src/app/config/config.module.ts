import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MinecraftTypographyModule } from '../lib/minecraft-typography/minecraft-typography.module';
import { MinecraftModule } from '../minecraft/minecraft.module';
import { SharedModule } from '../shared/shared.module';
import { ConfigTreeComponent } from './feature/config-tree/config-tree.component';
import { CombinePathPipe } from './pipe/path/combine-path.pipe';
import { LastPathKeyPipe } from './pipe/path/last-path-key.pipe';
import { ConfigNestedNodeComponent } from './ui/config-nested-node/config-nested-node.component';
import { ConfigNodeHeaderComponent } from './ui/config-node-header/config-node-header.component';
import { ConfigNodeMenuComponent } from './ui/config-node-menu/config-node-menu.component';
import { ConfigNodeComponent } from './ui/config-node/config-node.component';

@NgModule({
	imports: [CommonModule, SharedModule, FormsModule, MinecraftModule, MinecraftTypographyModule],
	declarations: [
		ConfigNodeHeaderComponent,
		ConfigTreeComponent,
		ConfigNodeComponent,
		ConfigNestedNodeComponent,
		LastPathKeyPipe,
		CombinePathPipe,
		ConfigNodeMenuComponent,
	],
	exports: [
		ConfigNodeHeaderComponent,
		ConfigTreeComponent,
		ConfigNodeComponent,
		ConfigNestedNodeComponent,
		LastPathKeyPipe,
		CombinePathPipe,
	],
})
export class ConfigModule {}
