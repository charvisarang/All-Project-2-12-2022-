import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number): any {
    let indiacurrency;
    if (value) {
      indiacurrency = "₹ " + value * 80;
    }
    return indiacurrency;
  }
}
