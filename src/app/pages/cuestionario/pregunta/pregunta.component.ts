import { Pregunta, Respuesta } from './../../../models/pregunta';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-pregunta',
  template: `
    <div class="container">
      <mat-card style="background-color: grey">
        <h2 > {{pregunta.pregunta}} </h2>
      </mat-card>
      
      <div style="width: 100%;" class="container">
      <mat-card>
        <mat-radio-group class="conjuntoRtas" >
          <mat-radio-button  *ngFor="let resp of pregunta.respuestas" [value]="resp" (change)="obtenerData(resp)">
            {{resp.titulo}}
          </mat-radio-button>
        </mat-radio-group>
      </mat-card>
      </div>
    </div>
  `,
  styles: [
    'mat-card {width: 80%; display: flex; justify-content: center; margin-bottom: 24px;}',
    '.container{display: flex; flex-direction: column;align-items: center}',
    '.conjuntoRtas{display: flex; flex-direction: column}',
    'mat-radio-button{margin-bottom:8px; margin-top: 8px}'
  ]
})
export class PreguntaComponent implements OnInit {

  @Input() pregunta!: Pregunta
  @Output() rta = new EventEmitter<Respuesta>()

  rtaObtenida: boolean =false

  constructor() { }

  ngOnInit(): void {
  }

  obtenerData(value: Respuesta){
      this.rta.emit(value)
  }
}

export class PreguntaModule { }