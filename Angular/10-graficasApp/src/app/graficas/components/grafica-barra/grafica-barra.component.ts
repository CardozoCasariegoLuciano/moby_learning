import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  @Input("isVertical") isVertical: boolean = true
  @Input("data") barChartData!: ChartData<'bar'>;


  ngOnInit(): void {
    if(!this.isVertical){    
      this.barChartOptions!.indexAxis = 'y';      
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
  }
 
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,   
    indexAxis: 'x',
    scales: {
      x: {},
      y: {
        min: 10
      }
    } 
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];
 
  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
 
  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
}
