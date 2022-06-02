import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-conecta-cuatro',
  templateUrl: './conecta-cuatro.component.html',
  styleUrls: ['./conecta-cuatro.component.scss']
})
export class ConectaCuatroComponent implements OnInit {

  items: number[] = []
  usuarioActivo: number = 1;
  numerosDeJugadas: number = 1;
  ganadorEncontrado: number = 0;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.numerosDeJugadas = 1;
    this.ganadorEncontrado = 0;
    this.usuarioActivo = 1;
    this.cargarArray();
  }

  reinciarJuego(){
    this.items = this.items.map(val=> val=0)
    this.numerosDeJugadas = 1;
    this.ganadorEncontrado = 0;
    this.usuarioActivo = 1;
  }

  cargarArray(){
      for(let i=1; i<=42; i++){
        this.items.push(0)
      }
  }

  ponerFicha(i: number, item: number){
    if (item==0){
      this.numerosDeJugadas++;
      this.items[i] = this.usuarioActivo;
      this.comprobarResultados(this.usuarioActivo)
      this.numerosDeJugadas%2 ? this.usuarioActivo=1 : this.usuarioActivo=2
    }
    else{
      this.snackBar.open('Ficha ya asignada, seleccione otra!!', 'Close', {duration: 2000})
    }
  }

  comprobarResultados(jugador: number){
      this.controlFilas(jugador)
      this.controlColumna(jugador)
      this.controlDiagonal(jugador)
  }

  controlFilas(jugador: number){
    let contador = 0;
    let cantidad = 0;
    for (let us of this.items) {
        if(cantidad%7==0){
            contador=0
        }
        if(jugador==us){
            contador++;
            if(contador==4){
              this.ganadorEncontrado=jugador;
            }
        }else{
          contador=0
        }
        cantidad++;
    }
  }

  controlColumna(jugador: number){
    let contador = 0;
    let cantidad = 0;
    for(let i=0; i<7;i++){
      contador = 0;
      for(let aux=i; aux<42; aux=aux+7){
        if(cantidad%6==0){
            contador=0
        }
        if(jugador==this.items[aux]){
            contador++;
            if(contador==4){
              this.ganadorEncontrado=jugador;
            }
        }else{
          contador=0
        }
        cantidad++;
      }
    }
  }

  controlDiagonal(jugador: number){

    //diagonal hacia la derecha
    let contador = 0;
    let cantidad = 0;
    for(let i=0; i<21;i++){
      contador = 0;
      for(let aux=i; aux<42; aux=aux+8){
        if(aux>42){
            contador=0
        }
        if(jugador==this.items[aux]){
            contador++;
            if(contador==4){
              this.ganadorEncontrado=jugador;
            }
        }else{
          contador=0
        }
        cantidad++;
      }
    }

    //diagonal hacia la izquierda
    contador = 0;
    cantidad = 0;
    for(let i=1; i<21;i++){
      contador = 0;
      for(let aux=i; aux<42; aux=aux+6){
        if(aux>42){
            contador=0
        }
        if(jugador==this.items[aux]){
            contador++;
            if(contador==4){
              this.ganadorEncontrado=jugador;
            }
        }else{
          contador=0
        }
        cantidad++;
      }
    }
  }

}
