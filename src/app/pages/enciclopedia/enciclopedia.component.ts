import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { Personajes } from './../../models/enciclopedia';
import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/enciclopedia';
import { SwapiEnciclopediaService } from 'src/app/services/swapi-enciclopedia.service';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

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
  displayedColumns: string[] = ['name', 'height', 'mass', 'birth_year'];
  

  constructor(private swapiEnciclopedia: SwapiEnciclopediaService,private dialog: MatDialog,) { }

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

  mostrarDetalles(pers: Personajes){
    this.dialog.open(DetallePersonajeComponent, {
      data: { personaje: pers},
      position: { top: '50px' },
      maxWidth: '600px'
    });
  }

}
