import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnciclopediaRoutingModule } from './enciclopedia-routing.module';
import { EnciclopediaComponent } from './enciclopedia.component';
import {MatCardModule} from '@angular/material/card';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';



@NgModule({
  declarations: [
    EnciclopediaComponent,
    DetallePersonajeComponent
  ],
  imports: [
    CommonModule,
    EnciclopediaRoutingModule,
    MatCardModule
  ]
})
export class EnciclopediaModule { }
