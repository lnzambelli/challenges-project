import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultadoRta'
})
export class ResultadoRtaPipe implements PipeTransform {

  transform(value: boolean): string {
    let text =""
    value ? text ="respuesta correcta" : text= "respuesta incorrecta"
    return text;
  }

}
