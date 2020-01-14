import { Component, OnInit } from '@angular/core';

import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { RelatorioService } from '../relatorio.service';

@Component({
  selector: 'relatorio-tipo-veiculo',
  templateUrl: './tipo-veiculo.component.html',
  styleUrls: ['./tipo-veiculo.component.css']
})
export class TipoVeiculoComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };
  public pieChartLabels: Label[] = ['Automóvel', 'Motocicleta', 'Bicicleta', 'Sem Veículo', 'Outro'];
  public pieChartData: number[] = [0,0,0,0,0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];

  constructor(
    private relatorioService: RelatorioService
  ) { }

  ngOnInit() {
    this.relatorioService.getRelatorioTipoVeiculo().subscribe(
      data => {
        this.pieChartData = new Array<number>();
        data.forEach(v => this.pieChartData.push(v));
      }
    );
  }

}
