import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combinePath',
})
export class CombinePathPipe implements PipeTransform {
  transform(key: string, path: string, isRoot: boolean): string {
    if (isRoot) {
      return key;
    }
    return path + '.' + key;
  }
}
