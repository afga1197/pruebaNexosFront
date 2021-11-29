import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'merchandise'
})
export class MerchandisePipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if (query === undefined || query === '') { return value; }
    return value.filter(merchandise => {
      return merchandise.name.toLowerCase().includes(query.toLowerCase());
    });
  }

}
