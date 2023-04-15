import { Pipe, PipeTransform } from '@angular/core';
import { Itemplo } from '../models/data';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: string, gender: string, array: Itemplo[]): string {
    console.log(value);
    console.log(array)
    if (gender === 'male') {
      return 'MR ' + value;
    } else {
      return 'miss ' + value;
    }
  }
}
