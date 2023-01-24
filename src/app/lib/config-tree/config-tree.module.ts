import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigUtilityModule } from '../config-utility/config-utility.module';
import { MinecraftCoreModule } from '../minecraft-core/minecraft-core.module';
import { ConfigTreeComponent } from './feature/config-tree/config-tree.component';
import { ConfigNestedNodeComponent } from './ui/config-nested-node/config-nested-node.component';
import { ConfigNodeHeaderComponent } from './ui/config-node-header/config-node-header.component';
import { ConfigNodeMenuComponent } from './ui/config-node-menu/config-node-menu.component';
import { ConfigNodeComponent } from './ui/config-node/config-node.component';
import { MinecraftTypographyModule } from "../minecraft-typography/minecraft-typography.module";

@NgModule({
    declarations: [
        ConfigNodeHeaderComponent,
        ConfigTreeComponent,
        ConfigNodeComponent,
        ConfigNestedNodeComponent,
        ConfigNodeMenuComponent,
    ],
    exports: [
        ConfigNodeHeaderComponent,
        ConfigTreeComponent,
        ConfigNodeComponent,
        ConfigNestedNodeComponent,
        ConfigNodeMenuComponent,
    ],
    imports: [CommonModule, SharedModule, MinecraftCoreModule, ConfigUtilityModule, FormsModule, MinecraftTypographyModule]
})
export class ConfigTreeModule {}
