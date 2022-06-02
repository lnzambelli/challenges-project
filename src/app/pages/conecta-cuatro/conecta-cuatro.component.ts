import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
      console.log("ya se ingreso una ficha")
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

  }

  controlDiagonal(jugador: number){

  }

}
