import { ItemsService } from '../../services/items.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-todo',
  templateUrl: './notes-todo.component.html',
  styleUrls: ['./notes-todo.component.css'],
})
export class NotesTodoComponent implements OnInit {
  @Input() list: any;
  @Input() where: any;
  items: any;

  constructor(public itemsService: ItemsService) {}

  async ngOnInit(): Promise<void> {
    this.items = await this.itemsService.renderItems(this.where);
    if (!this.itemsService.keys.includes(this.where)) {
      this.items = this.itemsService.idOrder(this.items);
      this.itemsService.keys.push(this.where);
      this.itemsService.items.push({ day: this.where, itemsDay: this.items });
    }
  }
}
