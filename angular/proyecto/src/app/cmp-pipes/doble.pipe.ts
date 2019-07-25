import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let res = value * 2;
    if (args[0]) {
      res += args[0];
      if (args[1]) {
        res -= args[1];
      }
    }
    return res;
  }

}
