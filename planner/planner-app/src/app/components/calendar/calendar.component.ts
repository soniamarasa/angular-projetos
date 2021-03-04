import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  events = [
    {
      startDateTime: new Date(2020, 11, 25),
      data: {
        name: 'Feliz Natal',
        description: 'Hohoho',
      },
    },
    {
      startDateTime: new Date(2021, 0, 1),
      data: {
        name: 'Feliz Ano Novo!',
        description: 'Feliz 2021!',
      },
    },
    {
      startDateTime: new Date(2020, 8, 5, 4),
      endDateTime: new Date(2020, 8, 9, 10),
      data: {
        name: 'Lorem ipsum dolor sit.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color: '#eda70e',
      },
    },
    {
      startDateTime: new Date(2020, 8, 29, 4),
      endDateTime: new Date(2020, 9, 1, 8),
      data: {
        name: 'To Next month event',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        color: '#3bed4c',
      },
    },
  ];

  options1 = {
    outline: false,
    evenDayDimensions: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
