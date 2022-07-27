import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,    
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];
 
  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: "#51C9F6", hoverBackgroundColor: "tomato" },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' , backgroundColor: "#466ED4", hoverBackgroundColor: "tomato"},
      { data: [100, 50, 40, 30, 86, 27, 90], label: 'Mi serie' , backgroundColor: "#735AEA", hoverBackgroundColor: "tomato"},
    ],
  };
 
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
 
  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
 
    this.chart?.update();
  }
}
