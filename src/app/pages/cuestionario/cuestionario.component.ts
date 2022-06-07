import { Pregunta, Respuesta } from './../../models/pregunta';
import { Component, OnInit } from '@angular/core';
import data from '../../../assets/mock/preguntasMock.json'
import { interval } from 'rxjs';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.scss']
})
export class CuestionarioComponent implements OnInit {

  listaDePreguntas: Pregunta[] = []
  contador: number=30;
  pregActivada: number = 0;
  pregunta!: Pregunta;
  resultado: boolean[] = [false,false,false]
  puntos: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.pregActivada =  0;
    this.iniciarContador()
    this.listaDePreguntas = data.preguntas
    this.pregunta = this.listaDePreguntas[this.pregActivada]
  }

  obtenerData(rta: Respuesta){
    this.puntos = 0;
    this.resultado[this.pregActivada]=rta.correcta
    this.resultado.forEach(res=> res==true? this.puntos++ : "")
    
  }

  iniciarContador(){
    this.contador = 30;
    let ciclo = setInterval(() => {
      this.contador--
    }, 1000);

    let recor = setTimeout(() => {
      clearInterval(ciclo)
      this.pregActivada++;
      if (this.pregActivada<3){
        this.pregunta = this.listaDePreguntas[this.pregActivada]
        this.iniciarContador()
      }
    }, 30000);

    if(this.pregActivada>2 && this.contador==0){
        clearTimeout(recor);
    }
  }

}
