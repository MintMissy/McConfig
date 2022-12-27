import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'typeIcon',
})
export class TypeIconPipe implements PipeTransform {
	transform(value: any): string {
		const valueType = typeof value;
		if (valueType === 'string') {
			return 'format_bold';
		} else if (valueType === 'boolean') {
			return 'done';
		} else {
			return '123';
		}
	}
}
