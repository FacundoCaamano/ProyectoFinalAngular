import { Pipe, PipeTransform } from '@angular/core';
import { Users } from 'src/app/dashboard/dashboard/pages/users/users/models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Users, ...args: unknown[]): unknown {
    
    return `${value.name} ${value.surname}`;
  }

}
