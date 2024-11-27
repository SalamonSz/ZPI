import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'value',
  standalone: true
})
export class ValuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
