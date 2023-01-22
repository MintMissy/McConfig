import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigTreeComponent } from './feature/config-tree/config-tree.component';
import { ConfigNestedNodeComponent } from './ui/config-nested-node/config-nested-node.component';
import { ConfigNodeHeaderComponent } from './ui/config-node-header/config-node-header.component';
import { ConfigNodeMenuComponent } from './ui/config-node-menu/config-node-menu.component';
import { ConfigNodeComponent } from './ui/config-node/config-node.component';

@NgModule({
	declarations: [
		ConfigNodeHeaderComponent,
		ConfigTreeComponent,
		ConfigNodeComponent,
		ConfigNestedNodeComponent,
		ConfigNodeMenuComponent,
	],
	imports: [CommonModule],
	exports: [
		ConfigNodeHeaderComponent,
		ConfigTreeComponent,
		ConfigNodeComponent,
		ConfigNestedNodeComponent,
		ConfigNodeMenuComponent,
	],
})
export class ConfigTreeModule {}
