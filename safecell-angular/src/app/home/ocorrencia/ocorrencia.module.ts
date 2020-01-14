import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OcorrenciaRoutingModule } from './ocorrencia-routing.module';
import { OcorrenciaComponent } from './ocorrencia.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { OcorrenciaService } from './ocorrencia.service';
import { BsDatepickerModule, TimepickerModule, TooltipModule } from 'ngx-bootstrap';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { TipoArmaComponent } from './relatorio/tipo-arma/tipo-arma.component';
import { ChartsModule } from 'ng2-charts';
import { TipoVeiculoComponent } from './relatorio/tipo-veiculo/tipo-veiculo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule,
    DropdownModule,
    ChartsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    OcorrenciaRoutingModule
  ],
  declarations: [
    OcorrenciaComponent,
    CadastrarComponent,
    HomeComponent,
    BuscarComponent,
    RelatorioComponent,
    TipoArmaComponent,
    TipoVeiculoComponent
  ],
  providers: [
    OcorrenciaService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OcorrenciaModule { }
