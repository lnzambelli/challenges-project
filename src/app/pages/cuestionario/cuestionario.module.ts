import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuestionarioRoutingModule } from './cuestionario-routing.module';
import { CuestionarioComponent } from './cuestionario.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { ResultadoRtaPipe } from './resultado-rta.pipe';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    CuestionarioComponent,
    PreguntaComponent,
    ResultadoRtaPipe
  ],
  imports: [
    CommonModule,
    CuestionarioRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatDividerModule
  ]
})
export class CuestionarioModule { }
