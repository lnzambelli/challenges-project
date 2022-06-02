import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  { path: 'conecta', 
    loadChildren: () => 
      import('./pages/conecta-cuatro/conecta-cuatro.module').then(
        (m) => m.ConectaCuatroModule
      ) 
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
