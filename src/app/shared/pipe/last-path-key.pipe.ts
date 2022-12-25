import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastPathKey',
})
export class LastPathKeyPipe implements PipeTransform {
  transform(value: string): string {
    const lastKey = value.split('.').pop();
    return lastKey !== undefined ? lastKey : '';
  }
}
