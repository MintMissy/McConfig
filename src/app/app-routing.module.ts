import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./domain/home-page/home-page.module').then((m) => m.HomePageModule),
	},
	{
		path: 'texteditor',
		loadChildren: () =>
			import('./domain/minecraft-text-editor-page/minecraft-text-editor-page.module').then(
				(m) => m.MinecraftTextEditorPageModule
			),
	},
	{
		path: 'configeditor',
		loadChildren: () =>
			import('./domain/config-editor-page/config-editor-page.module').then((m) => m.ConfigEditorPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
