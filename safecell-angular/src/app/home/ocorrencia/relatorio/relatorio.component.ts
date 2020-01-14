import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Occurrence } from 'src/app/model/occurrence';
import { OcorrenciaService } from '../ocorrencia.service';
import { MessageService } from 'primeng/api';
import { error } from '@angular/compiler/src/util';
import { Subject } from 'rxjs';
import { RelatorioService } from './relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
  providers: [MessageService]
})
export class RelatorioComponent implements OnInit {

  constructor(
    private relatorioService: RelatorioService
  ) { }

  ngOnInit() {
    this.relatorioService.init();
  }
}
