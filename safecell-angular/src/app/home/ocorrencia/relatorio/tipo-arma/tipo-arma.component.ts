import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { RelatorioService } from '../relatorio.service';

@Component({
  selector: 'relatorio-tipo-arma',
  templateUrl: './tipo-arma.component.html',
  styleUrls: ['./tipo-arma.component.css']
})
export class TipoArmaComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: false,
    legend: {
      position: 'top',
    }
  };
  public pieChartLabels: Label[] = ['Pistola', 'Revolver', 'Faca', 'Cano Longo', 'Sem Arma', 'Outro'];
  public pieChartData: number[] = [0,0,0,0,0,0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];

  constructor(
    private relatorioService: RelatorioService
  ) { }

  ngOnInit() {
    this.relatorioService.getRelatorioTipoArma().subscribe(
      data => {
        this.pieChartData = new Array<number>();
        data.forEach(v => this.pieChartData.push(v));
      }
    );
  }

}
