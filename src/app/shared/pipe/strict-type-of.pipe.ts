import { Pipe, PipeTransform } from '@angular/core';

export type strictType =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function'
  | 'integer'
  | 'double';

@Pipe({
  name: 'strictTypeOf',
})
export class StrictTypeOfPipe implements PipeTransform {
  transform(value: any): strictType {
    if (typeof value === 'number') {
      return value === Math.floor(value) ? 'integer' : 'double';
    }

    return typeof value;
  }
}
