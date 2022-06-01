import { Challenge } from './../../models/challenge';
import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-challenge',
  template: `
      <mat-card class="cardItems">
        <img mat-card-image src={{challenge.urlImg}} alt="challenge">
        
        <mat-card-content >
            <mat-card-title>{{challenge.title}} </mat-card-title>
            <button mat-raised-button color="primary" (click)="navigateTo(challenge.route)">IR</button>
        </mat-card-content>
    </mat-card>
  `,
  styles: [
      'mat-card {width: 300px; padding: 0;}',
      'mat-card-title {text-align: center; font-size: 16px}',
      'img {width: 100%; margin: auto}',
      'mat-card-content {display: flex; flex-direction: column; justify-content: center;margin-top: 16px}',
    ]
})
export class CardChallengeComponent{

  @Input() challenge!: Challenge;

  constructor(private router: Router) { }

  navigateTo(route: string){
      this.router.navigate([route])
  }

}

@NgModule({
  declarations: [CardChallengeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [CardChallengeComponent]
})
export class CardChallengeModule { }
