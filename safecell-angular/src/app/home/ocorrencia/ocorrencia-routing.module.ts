import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OcorrenciaComponent } from './ocorrencia.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
  {path: '', component: OcorrenciaComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'cadastrar', component: CadastrarComponent},
      {path: 'buscar', component: BuscarComponent},
      {path: 'relatorio', component: RelatorioComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcorrenciaRoutingModule { }
