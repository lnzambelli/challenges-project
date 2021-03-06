import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnciclopediaRoutingModule } from './enciclopedia-routing.module';
import { EnciclopediaComponent } from './enciclopedia.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    EnciclopediaComponent,
  ],
  imports: [
    CommonModule,
    EnciclopediaRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule  
  ]
})
export class EnciclopediaModule { }
