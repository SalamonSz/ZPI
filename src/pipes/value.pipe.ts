import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatValue',
  standalone: true
})
export class FormatValuePipe implements PipeTransform {

  transform(value: number | string, showNegativeSign: boolean = true): string {
    if (typeof value === 'string') {
      value = parseFloat(value.replace(',', '.'));
    }

    if (isNaN(value)) {
      return '';
    }
    
    let absValue = Math.abs(value);
    let formattedValue = absValue.toLocaleString('pl-PL', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    if (!showNegativeSign && value < 0) {
      return formattedValue;
    }

    return value < 0 ? `-${formattedValue}` : formattedValue;
  }
}
