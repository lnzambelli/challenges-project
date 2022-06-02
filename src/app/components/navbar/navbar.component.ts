import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  styles:[
    'mat-toolbar {cursor: pointer}',
  ],
  template: `
    <mat-toolbar (click)="navigateTo()">
        <span>Challenges Mouredev</span>
    </mat-toolbar>
  `,
})
export class NavbarComponent {

  constructor(private router: Router) { }

  navigateTo(){
    this.router.navigate(['home'])
  }

}

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
