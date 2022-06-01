import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  styles:[
    'mat-toolbar {cursor: pointer}',
  ],
  template: `
    <mat-toolbar>
        <span>Challenges Mouredev</span>
    </mat-toolbar>
  `,
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
