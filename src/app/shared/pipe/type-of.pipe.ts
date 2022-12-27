import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'typeOf',
})
export class TypeOfPipe implements PipeTransform {
	transform(
		value: unknown
	): 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' {
		return typeof value;
	}
}
