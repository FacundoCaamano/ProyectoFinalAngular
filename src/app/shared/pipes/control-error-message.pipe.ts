import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlErrorMessage'
})
export class ControlErrorMessagePipe implements PipeTransform {

  transform(error: {key : string , value:any}, ...args: unknown[]): unknown {
    
    const errorMessages: Record<string,string> = {
      required: 'This field is required.',
      email : 'It must include @',
      minlength:'It must contain more characters.'
    }
    return errorMessages[error.key];
  }

}
