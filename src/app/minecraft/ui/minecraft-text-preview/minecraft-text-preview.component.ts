import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-minecraft-text-preview',
	templateUrl: './minecraft-text-preview.component.html',
	styleUrls: ['./minecraft-text-preview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinecraftTextPreviewComponent {
	@Input() name = '';
	@Input() lore: string[] = [];
}
