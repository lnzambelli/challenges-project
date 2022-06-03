import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnciclopediaRoutingModule } from './enciclopedia-routing.module';
import { EnciclopediaComponent } from './enciclopedia.component';
import {MatCardModule} from '@angular/material/card';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    EnciclopediaComponent,
    DetallePersonajeComponent
  ],
  imports: [
    CommonModule,
    EnciclopediaRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule  
  ]
})
export class EnciclopediaModule { }
