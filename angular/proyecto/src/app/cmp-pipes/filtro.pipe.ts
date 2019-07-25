import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, ...args: any[]): any {
    return value.filter(item => item.includes(args[0]));
  }

}
