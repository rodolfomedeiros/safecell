import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaComponent } from './conta.component';
import { NewComponent } from './new/new.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {path: '', component: ContaComponent, children: [
    {path: 'new', component: NewComponent},
    {path: 'editar', component: EditarComponent},
    {path: 'view', component: ListaComponent}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ContaRoutingModule {}
