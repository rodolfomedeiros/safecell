import { ContaService } from './../home/conta/conta.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';

import { FreeViewRoutingModule } from './free-view-routing.module';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FreeViewComponent } from './free-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    FreeViewRoutingModule
  ],
  declarations: [
    LoginComponent,
    CadastrarComponent,
    FreeViewComponent
  ],
  providers: [
    ContaService
  ]
})
export class FreeViewModule { }
