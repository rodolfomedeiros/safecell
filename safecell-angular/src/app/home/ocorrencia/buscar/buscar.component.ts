import { Component, OnInit } from '@angular/core';
import { Occurrence } from 'src/app/model/occurrence';
import { OcorrenciaService } from '../ocorrencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
  providers: [MessageService]
})
export class BuscarComponent implements OnInit {

  occurrence: Occurrence;

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private toast: MessageService
  ) { }

  ngOnInit() {
  }

  onSearch(filter: string) {
    this.ocorrenciaService.onSearch(filter).subscribe(
      data => {
        if (data) {
          this.occurrence = data;
          this.showSuccessEncontrada();
        } else {
          this.occurrence = null;
          this.showError();
        }
      },
      error => this.showError()
    );
  }

  /* public edit(id: number) {
    this.router.navigate([this.occurrenceService.urlInternNew, id]);
  } */

  public arquivar() {

    this.occurrence.status = true;

    this.ocorrenciaService.save(this.occurrence).subscribe(
      data => {
        if (data) {
          this.occurrence = data;
          this.showSuccessArquivar();
        } else {
          this.showError();
        }
      },
      error => this.showError()
    );
  }

  showSuccessArquivar() {
    this.toast.add({ severity: 'success', summary: 'Ocorrência Arquivada!' });
  }

  showSuccessEncontrada() {
    this.toast.add({ severity: 'success', summary: 'Ocorrência Encontrada!' });
  }

  showError() {
    this.toast.add({ severity: 'error', summary: 'Ocorrência não encontrada...' });
  }

  showErrorArquivar() {
    this.toast.add({ severity: 'error', summary: 'Ocorrência não foi arquivada...' });
  }

}
