import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardChallengeModule } from 'src/app/components/card-challenge/card-challenge.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardChallengeModule,
    MatGridListModule
  ]
})
export class HomeModule { }
