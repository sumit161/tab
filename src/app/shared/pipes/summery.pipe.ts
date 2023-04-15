import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summery',
})
export class SummeryPipe implements PipeTransform {
  transform(value: string) {
return (value.slice(0, 50).concat('...'));
  }
}
