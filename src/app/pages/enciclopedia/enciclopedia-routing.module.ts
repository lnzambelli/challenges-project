import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnciclopediaComponent } from './enciclopedia.component';

const routes: Routes = [{ path: '', component: EnciclopediaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnciclopediaRoutingModule { }
