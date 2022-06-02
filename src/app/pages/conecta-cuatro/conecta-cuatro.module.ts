import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConectaCuatroRoutingModule } from './conecta-cuatro-routing.module';
import { ConectaCuatroComponent } from './conecta-cuatro.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FichasPipe } from './fichas.pipe';

@NgModule({
  declarations: [
    ConectaCuatroComponent,
    FichasPipe
  ],
  imports: [
    CommonModule,
    ConectaCuatroRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class ConectaCuatroModule { }
