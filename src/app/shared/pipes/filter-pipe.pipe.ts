import { Pipe, PipeTransform } from '@angular/core';
import { cPlayers } from '../models/data';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(
    value: Array<cPlayers>,
    searchText: string,
    // n: number
  ): Array<cPlayers> {
    // console.log(searchText);
    // return value
    // arraylength:Number
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    let k = value.filter((ele) =>
      ele.country
        .toLowerCase()
        .trim()
        .startsWith(searchText.toLowerCase().trim())
    ).length;

    return value.filter((ele) =>
      ele.country
        .toLowerCase()
        .trim()
        .startsWith(searchText.toLowerCase().trim())
    );
  }
}
