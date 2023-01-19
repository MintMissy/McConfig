import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'lastPathKey',
})
export class LastPathKeyPipe implements PipeTransform {
	transform(value: string): string {
		const lastKey = value.split('.').pop();
		if (lastKey === undefined) {
			throw new Error("LastPathKey pipe couldn't get last path key from empty array");
		}

		return lastKey;
	}
}
