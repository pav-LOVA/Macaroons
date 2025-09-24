import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string): string {
    if(`${value.length} >= 95`) {
      return value.substring(0, 95) + '...';
    } else {
      return value;
    }
  }

}
