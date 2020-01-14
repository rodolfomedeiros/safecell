import { Injectable } from '@angular/core';
import { OcorrenciaService } from '../ocorrencia.service';
import { Occurrence } from 'src/app/model/occurrence';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  occurrences: Occurrence[];

  relatorioTipoArma: number[];
  private emissorTipoArma = new Subject<number[]>();

  relatorioTipoVeiculo: number[];
  private emissorTipoVeiculo = new Subject<number[]>();

  constructor(
    private ocorrenciaService: OcorrenciaService
  ) {}

  public init(){
    this.ocorrenciaService.getAll().subscribe(
      data => {
        this.occurrences = data;

        this.setRelatorioTipoArma();
        this.emissorTipoArma.next(this.relatorioTipoArma);

        this.setRelatorioTipoVeiculo();
        this.emissorTipoVeiculo.next(this.relatorioTipoVeiculo);

      },
      error => {
        console.error('erro no getALL');
      }
    );
  }

  private setRelatorioTipoArma() {
    this.relatorioTipoArma = [0, 0, 0, 0, 0, 0];
    this.occurrences.forEach(o => {
      this.relatorioTipoArma[o.tipoArma - 1]++;
    });
  }

  public getRelatorioTipoArma() {
    return this.emissorTipoArma.asObservable();
  }

  private setRelatorioTipoVeiculo() {
    this.relatorioTipoVeiculo = [0, 0, 0, 0, 0];
    this.occurrences.forEach(o => {
      this.relatorioTipoVeiculo[o.tipoVeiculo - 1]++;
    });
  }

  public getRelatorioTipoVeiculo() {
    return this.emissorTipoVeiculo.asObservable();
  }
}
