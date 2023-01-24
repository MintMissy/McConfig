import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'combinePath',
})
export class CombinePathPipe implements PipeTransform {
	transform(path: string, newKey: string): string {
		if (path === '') {
			return newKey;
		}
		return path + '.' + newKey;
	}
}
