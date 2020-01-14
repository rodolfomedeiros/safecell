import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { FreeViewComponent } from './free-view.component';

const routes: Routes = [
  {path: '', component: FreeViewComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'cadastrar', component: CadastrarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeViewRoutingModule { }
