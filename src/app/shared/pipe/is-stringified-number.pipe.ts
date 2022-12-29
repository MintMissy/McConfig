import { Pipe, PipeTransform } from '@angular/core';

export function isStringifiedNumber(value: string) {
	if (typeof value != 'string') return false;
	return !isNaN(+value) && !isNaN(parseFloat(value));
}

@Pipe({
	name: 'isStringifiedNumber',
})
export class IsStringifiedNumberPipe implements PipeTransform {
	transform(value: string): boolean {
		return isStringifiedNumber(value);
	}
}
