import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {
  transform(value: string, active?: boolean): string {
    return active?value.replace(/./g, "*"):value;
  // if(active){
    // for(let i of value.split("")){
    //   value = value.replace(i, "*");
    // }
  // }
  }
}
