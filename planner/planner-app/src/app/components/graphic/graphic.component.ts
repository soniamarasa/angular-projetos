import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { ChartsModule, Label, SingleDataSet } from 'ng2-charts';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
})
export class GraphicComponent implements OnInit {
  constructor(public itemService: ItemsService) {}

  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'top' },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + ' %';
        },
      },
    },
  };

  public chartColors: Array<any> = [
    {
      // all colors in order
      backgroundColor: ['#FFA500','#33CCCC', '#4AB915', '#5C5C5E', '#DC143C'],
      borderColor: ['black', 'black', 'black', 'black', 'black'],
    },
  ];

  ngOnInit() {}
}
