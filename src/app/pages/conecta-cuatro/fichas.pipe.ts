import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fichas'
})
export class FichasPipe implements PipeTransform {

  transform(value: number): string {
    let ficha = "";
    if (value==1){
        ficha= '`X' //wind + .
    }else if(value==2){
      ficha= 'O'
    }
    
    return ficha;
  }

}
