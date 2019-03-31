import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'evelocidad', loadChildren: './componentes/evelocidad/evelocidad.module#EvelocidadPageModule' },
  { path: 'frenado', loadChildren: './componentes/frenado/frenado.module#FrenadoPageModule' },
  { path: 'aceleracion', loadChildren: './componentes/aceleracion/aceleracion.module#AceleracionPageModule' },
  { path: 'mapa', loadChildren: './componentes/mapa/mapa.module#MapaPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
