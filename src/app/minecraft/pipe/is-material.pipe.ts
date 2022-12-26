import { Pipe, PipeTransform } from '@angular/core';

import { Material } from '../enums/material.enum';

@Pipe({
	name: 'isMaterial',
})
export class IsMaterialPipe implements PipeTransform {
	transform(value: string | null | undefined): boolean {
		if (!value) {
			return false;
		}
		return Object.values(Material).includes(value as Material);
	}
}
