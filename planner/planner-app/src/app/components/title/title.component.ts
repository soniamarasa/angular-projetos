import { Component, OnInit } from '@angular/core';
import { DatesService } from '../../services/dates.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  todayIs: any;

  constructor(private dateService: DatesService) {}

  ngOnInit(): void {
    this.todayIs = this.dateService.today();
  }
}
