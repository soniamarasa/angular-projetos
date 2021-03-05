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
    this.itemsService.totalTasks = 0;
    this.itemsService.started = 0;
    this.itemsService.important = 0;
    this.itemsService.finished = 0;
    this.itemsService.canceled = 0;
    this.itemsService.notInitiated = 0;
    this.itemsService.total = 0;
  }
}
