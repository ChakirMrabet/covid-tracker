import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyNumber',
})
export class PrettyNumberPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
