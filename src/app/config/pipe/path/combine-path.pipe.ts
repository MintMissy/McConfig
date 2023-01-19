import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'combinePath',
})
export class CombinePathPipe implements PipeTransform {
	transform(key: string, path: string): string {
		if (path === '') {
			return key;
		}
		return path + '.' + key;
	}
}
