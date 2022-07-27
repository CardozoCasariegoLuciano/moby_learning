import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  isLoading: boolean = true;

  constructor(private serivce: GraficasService) {}

  ngOnInit(): void {
    this.serivce.getData().subscribe((m) => {
      this.doughnutChartData = {
        labels: Object.keys(m),
        datasets: [{ data: Object.values(m) }],
      };
      this.isLoading = false;
    });
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [{ data: [] }],
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
