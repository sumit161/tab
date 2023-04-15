import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employee',
})
export class EmployeePipe implements PipeTransform {
  transform(value: any): any {
    // let current = new Date().getFullYear();
    // console.log(current);
    // let employeeDob = new Date(value).getFullYear();
    // console.log(employeeDob);
    // return current - employeeDob;
    let current = Date.now();
    console.log(current);
    let employeeDob = value.getTime();
    console.log(employeeDob);
    return Math.ceil((current - employeeDob)/(86400000*365));

  }
}
