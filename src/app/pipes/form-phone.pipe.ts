import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formPhone'
})
export class FormPhonePipe implements PipeTransform {

  transform(value: string): string {
    const digits = value.replace(/\D/g, '');
    const regex = /^375(25|29|33|44)(\d{3})(\d{2})(\d{2})$/;
    if (regex.test(digits)) {
      return digits.replace(regex, '+375 ($1) $2-$3-$4');
    }
    return value;
  }

}
