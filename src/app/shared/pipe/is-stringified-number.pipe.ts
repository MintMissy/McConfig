import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'isStringifiedNumber',
})
export class IsStringifiedNumberPipe implements PipeTransform {
	transform(value: string): boolean {
		if (typeof value != 'string') return false;
		return !isNaN(+value) && !isNaN(parseFloat(value));
	}
}
