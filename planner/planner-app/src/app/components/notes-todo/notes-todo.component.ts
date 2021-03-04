import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-notes-todo',
  templateUrl: './notes-todo.component.html',
  styleUrls: ['./notes-todo.component.css'],
})
export class NotesTodoComponent implements OnInit {
  @Input() list: any;
  @Input() where: any;
  items: any;
  currentId!: any;


  constructor(public itemService: ItemsService) {}

  async ngOnInit(): Promise<void> {
    this.currentId = this.itemService.currentId;
    this.items = await this.itemService.renderItems(this.where);
    if (!this.itemService.keys.includes(this.where)) {
      this.items = this.itemService.idOrder(this.items);
      this.itemService.keys.push(this.where);
      this.itemService.items.push({ day: this.where, itemsDay: this.items });
    }
  }
}
