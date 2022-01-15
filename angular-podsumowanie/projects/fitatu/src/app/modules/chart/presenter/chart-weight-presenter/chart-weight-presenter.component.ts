import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { WeightChart } from 'projects/fitatu/src/app/shared/models/weightChart.model';

@Component({
  selector: 'app-chart-weight-presenter',
  templateUrl: './chart-weight-presenter.component.html',
  styleUrls: ['./chart-weight-presenter.component.scss'],
})
export class ChartWeightPresenterComponent {
  @Input() set weightChart(weightChart: WeightChart) {
    this._weightChart = weightChart;
    this.lineChartData = [{ data: weightChart?.userWeight, label: 'Waga' }];
    this.lineChartLabels = [];
    this.weightChart?.date.forEach((date) => {
      this.lineChartLabels.push(date);
    });
  }
  get weightChart(): WeightChart {
    return this._weightChart;
  }
  _weightChart: WeightChart;

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
  ];
  lineChartLegend = true;
}
