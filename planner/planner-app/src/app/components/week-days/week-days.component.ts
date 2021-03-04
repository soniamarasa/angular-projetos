import { ItemsService } from '../../services/items.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DatesService } from '../../services/dates.service';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.css'],
})
export class WeekDaysComponent implements OnInit {
  weekDay: any;

  @Input() day: any; // Esse input siginifca que o valor dessa variavel vai estar vindo do componente pai (output é do filho pro papi)
  @Input() where: any;
  items: any;
  currentId!: any;
  today: any;

  constructor(
    public itemService: ItemsService,
    public datesService: DatesService
  ) {}

  async ngOnInit(): Promise<void> {
    this.today = this.day.toLowerCase();
    this.weekDay = this.datesService.wD;

    this.currentId = this.itemService.currentId;
    this.items = await this.itemService.renderItems(this.where);
    this.items = this.itemService.idOrder(this.items);
    this.itemService.keys.push(this.where);
    this.itemService.items.push({ day: this.where, itemsDay: this.items });
    this.itemService.items.forEach((day: any) => {
      if (day.day === this.where) {
        day.itemsDay.sort((a: any, b: any) => {
          return a.id - b.id;
        });
      }
    });
  }
}
