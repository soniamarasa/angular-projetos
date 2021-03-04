import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-modal-graphic',
  templateUrl: './modal-graphic.component.html',
  styleUrls: ['./modal-graphic.component.css'],
})
export class ModalGraphicComponent implements OnInit {
  constructor(
    public bsModalRef: BsModalRef,
    public itemsService: ItemsService
  ) {}

  ngOnInit(): void {}

  cleanValues(): any {
    this.itemsService.tasks = 0;
    this.itemsService.events = 0;
    this.itemsService.appointments = 0;
    this.itemsService.notes = 0;
    this.itemsService.tv = 0;
    this.itemsService.total = 0;
  }
}
