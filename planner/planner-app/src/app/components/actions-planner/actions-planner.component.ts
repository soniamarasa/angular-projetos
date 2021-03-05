import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ItemsService } from '../../services/items.service';
import { ThemeService } from '../../services/theme.service';

import { ModalGraphicComponent } from '../modal-graphic/modal-graphic.component';
import { ModalResetComponent } from '../modal-reset/modal-reset.component';

@Component({
  selector: 'app-actions-planner',
  templateUrl: './actions-planner.component.html',
  styleUrls: ['./actions-planner.component.css'],
})
export class ActionsPlannerComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    public themeService: ThemeService,
    private itemService: ItemsService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {}

  changeTheme(e: any): any {
    console.log(e);
    this.themeService.theme = e;
    this.themeService.setTheme(this.themeService.theme);
  }

  reset(): any {
    this.modalRef = this.modalService.show(ModalResetComponent, {
      class: 'modal-dialog-top modal-lg',
    });
  }

  statistics() {
    this.itemService.items.forEach((element: any) => {
      element.itemsDay.forEach((items: any) => {
        if (items.type === 'task') {
          this.itemService.totalTasks += 1;
          if (items.started) {
            this.itemService.started += 1;
          } else if (items.finished) {
            this.itemService.finished += 1;
          } else if (items.canceled) {
            this.itemService.canceled += 1;
          } else if (items.important) {
            this.itemService.important += 1;
          } else if (
            items.finished === false &&
            items.finished === false &&
            items.canceled === false
          ) {
            this.itemService.notInitiated += 1;
          }

          this.itemService.total += 1;
        }
      });
    });
    const porcent = 100 / this.itemService.total;
    this.itemService.started *= porcent;
    this.itemService.finished *= porcent;
    this.itemService.canceled *= porcent;
    this.itemService.important *= porcent;
    this.itemService.notInitiated *= porcent;

    this.itemService.types = [
      'Em aberto',
      'Iniciadas',
      'Conclúidas',
      'Canceladas',
      'Importantes',
    ];

    this.itemService.valuesType = [
      this.itemService.notInitiated.toFixed(2),
      this.itemService.started.toFixed(2),
      this.itemService.finished.toFixed(2),
      this.itemService.canceled.toFixed(2),
      this.itemService.important.toFixed(2),
    ];

    this.modalRef = this.modalService.show(ModalGraphicComponent, {
      class: 'modal-dialog-top modal-lg',
    });

    console.log(this.itemService.valuesType);
  }
}
