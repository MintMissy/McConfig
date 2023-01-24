import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./domain/home-page/home-page.module').then((m) => m.HomePageModule),
	},
	{
		path: 'editor/text',
		loadChildren: () =>
			import('./domain/minecraft-text-editor-page/minecraft-text-editor-page.module').then(
				(m) => m.MinecraftTextEditorPageModule
			),
	},
	{
		path: 'editor/config',
		loadChildren: () =>
			import('./domain/config-editor-page/config-editor-page.module').then((m) => m.ConfigEditorPageModule),
	},
	{
		path: 'editor/item',
		loadChildren: () =>
			import('./domain/items-configurator-page/items-configurator-page.module').then(
				(m) => m.ItemsConfiguratorPageModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
