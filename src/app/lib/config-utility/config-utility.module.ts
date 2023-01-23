import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombinePathPipe } from './pipe/path/combine-path.pipe';
import { LastPathKeyPipe } from './pipe/path/last-path-key.pipe';

@NgModule({
	declarations: [LastPathKeyPipe, CombinePathPipe],
	imports: [CommonModule],
	exports: [LastPathKeyPipe, CombinePathPipe],
})
export class ConfigUtilityModule {}
