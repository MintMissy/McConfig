/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'entries',
})
export class EntriesPipe implements PipeTransform {
	transform(value: any): { key: any; value: any }[] {
		if (typeof value === 'object') {
			return Object.entries(value).map(([key, value]) => ({ key: key, value: value }));
		}
		return [{ key: value[0], value: value[1] }];
	}
}
