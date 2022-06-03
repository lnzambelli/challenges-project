import { Personajes } from './../../../models/enciclopedia';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, NgModule } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  template: `
    <mat-dialog-content>
        <h2 style="white-space: pre-line">{{data.personaje.name}}</h2>
        <mat-divider></mat-divider>
        <p style="white-space: pre-line">Altura: {{data.personaje.height}}</p>
        <mat-divider></mat-divider>
        <p style="white-space: pre-line">Peso: {{data.personaje.mass}}</p>
        <mat-divider></mat-divider>
        <p style="white-space: pre-line">Cumpleaños: {{data.personaje.birth_year}}</p>
    </mat-dialog-content>

    <mat-dialog-actions>
        <button mat-raised-button mat-dialog-close style="width: 100%;"  [mat-dialog-close]="true">Cerrar</button>
    </mat-dialog-actions>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetallePersonajeComponent {

  constructor(public dialogo: MatDialogRef<DetallePersonajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { personaje: Personajes }) { 
  }
}


@NgModule({
  declarations: [DetallePersonajeComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [DetallePersonajeComponent]
})
export class DetallePersonajeModule { }