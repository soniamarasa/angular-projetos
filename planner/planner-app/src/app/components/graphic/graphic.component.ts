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
  public chartColors: Array<any> = [
    {
      // all colors in order
      backgroundColor: ['#fbf5c5', '#afdefa', '#e3d2f4', '#ffd1d0', '#bdf6e3'],
      borderColor: ['black', 'black', 'black', 'black', 'black'],
    },
  ];

  constructor(public itemService: ItemsService) {}

  ngOnInit() {}
}
