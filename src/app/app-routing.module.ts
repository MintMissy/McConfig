import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./editor/editor.module').then((m) => m.EditorModule) },
	{
		path: 'texteditor',
		loadChildren: () =>
			import('./domain/minecraft-text-editor/minecraft-text-editor.module').then((m) => m.MinecraftTextEditorModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
