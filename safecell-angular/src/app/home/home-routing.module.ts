import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)},
    {path: 'conta', loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule)},
    {path: 'ocorrencia', loadChildren: () => import('./ocorrencia/ocorrencia.module').then(m => m.OcorrenciaModule)}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
