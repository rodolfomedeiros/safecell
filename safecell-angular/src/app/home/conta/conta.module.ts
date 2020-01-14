import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListaComponent } from './lista/lista.component';
import { ContaRoutingModule } from './conta-routing.module';
import { ContaService } from './conta.service';
import { ContaComponent } from './conta.component';
import { NewComponent } from './new/new.component';
import { ToastModule } from 'primeng/toast';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule,
    ContaRoutingModule
  ],
  declarations: [
    ContaComponent,
    NewComponent,
    ListaComponent,
    EditarComponent
  ],
  providers: [
    ContaService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContaModule { }
