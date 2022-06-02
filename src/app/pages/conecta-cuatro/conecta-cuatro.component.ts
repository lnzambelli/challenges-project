import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conecta-cuatro',
  templateUrl: './conecta-cuatro.component.html',
  styleUrls: ['./conecta-cuatro.component.scss']
})
export class ConectaCuatroComponent implements OnInit {

  items: number[] = []
  usuarioActivo: number = 1;
  numerosDeJugadas: number = 1

  constructor() { }

  ngOnInit(): void {
    this.numerosDeJugadas = 1;
    this.cargarArray();
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
      this.numerosDeJugadas%2 ? this.usuarioActivo=1 : this.usuarioActivo=2
    }
    else{
      console.log("ya se ingreso una ficha")
    }
    
  }

}
