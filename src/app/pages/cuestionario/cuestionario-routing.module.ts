import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './cuestionario.component';

const routes: Routes = [{ path: '', component: CuestionarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuestionarioRoutingModule { }
