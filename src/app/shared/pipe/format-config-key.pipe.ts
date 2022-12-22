import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatConfigKey',
})
export class FormatConfigKeyPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replaceAll('.', ' ➤ ')
      .replaceAll('-', ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
