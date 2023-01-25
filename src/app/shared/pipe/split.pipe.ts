import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'split',
})
export class SplitPipe implements PipeTransform {
	transform(message: string, splitSymbol: string): string[] {
		return message.split(splitSymbol);
	}
}
