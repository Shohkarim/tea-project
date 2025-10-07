import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: number | null): string {
    if (value === null || value === undefined) {
      return '';
    }

    // Округляем до 2 знаков и добавляем "руб."
    return value.toFixed(2) + ' руб.';
  }

}
