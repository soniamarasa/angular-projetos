import { Component, OnInit, ViewChild } from '@angular/core';
import { WeekDaysComponent } from './../../components/week-days/week-days.component';
import { DatesService } from './../../services/dates.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  weekDay: any;

  constructor(private datesService: DatesService) {
    this.weekDay = this.datesService.weekDay;
    console.log(this.weekDay);
  }

  ngOnInit(): void {}
}
