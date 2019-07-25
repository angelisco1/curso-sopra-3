import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRight'
})
export class CurrencyRightPipe implements PipeTransform {

  transform(value: string): string {
    // let moneda = value[0];
    // let precio = value.slice(1);
    // return precio + moneda;
    return value.slice(1) + value[0];
  }

}
