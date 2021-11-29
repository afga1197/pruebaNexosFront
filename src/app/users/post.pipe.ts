import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'post'
})
export class PostPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if (query === undefined || query === '') { return value; }
    return value.filter(post => {
      return post.name.toLowerCase().includes(query.toLowerCase());
    });
  }
}
