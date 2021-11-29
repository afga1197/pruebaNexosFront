import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if (query === undefined || query === '') { return value; }
    return value.filter(users => {
      return users.name.toLowerCase().includes(query.toLowerCase());
    });
  }

}
