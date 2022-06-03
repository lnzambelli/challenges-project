import { Personajes } from './../../models/enciclopedia';
import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/enciclopedia';
import { SwapiEnciclopediaService } from 'src/app/services/swapi-enciclopedia.service';

@Component({
  selector: 'app-enciclopedia',
  templateUrl: './enciclopedia.component.html',
  styleUrls: ['./enciclopedia.component.scss']
})
export class EnciclopediaComponent implements OnInit {
  
  arrResultado!: Respuesta;
  estaCargado: boolean = false;
  arrPersonajes: any[] = [];
  paginaActual: number=1;
  siguientePag=" ";
  anteriorPag=" ";
  

  constructor(private swapiEnciclopedia: SwapiEnciclopediaService) { }

  ngOnInit(): void {
      this.cargarDatos()
  }

  cargarDatos(page?: number){
    this.estaCargado = false;
    this.swapiEnciclopedia.get(page).subscribe((response: Respuesta) => {
      this.parseData(response);
      this.estaCargado = true;
    })
  }

  private parseData(response: Respuesta) {
    this.arrPersonajes = response.results
    this.siguientePag = response.next
    this.anteriorPag = response.previous
  }

  sigPagina(){
    this.paginaActual++;
    this.cargarDatos(this.paginaActual)
  }

  antPagina(){
    this.paginaActual--;
    this.cargarDatos(this.paginaActual)
  }

}
