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
          this.itemService.tasks += 1;
        } else if (items.type === 'note') {
          this.itemService.notes += 1;
        } else if (items.type === 'event') {
          this.itemService.events += 1;
        } else if (items.type === 'appointment') {
          this.itemService.appointments += 1;
        } else if (items.type === 'tv') {
          this.itemService.tv += 1;
        }

        this.itemService.total += 1;
      });
    });
    const porcent = 100 / this.itemService.total;
    this.itemService.tasks *= porcent;
    this.itemService.events *= porcent;
    this.itemService.appointments *= porcent;
    this.itemService.notes *= porcent;
    this.itemService.tv *= porcent;

    this.itemService.types = [
      'Tarefas',
      'Eventos',
      'Compromissos',
      'Anotações',
      'Tv/Filmes',
    ];
    this.itemService.valuesType = [
      this.itemService.tasks.toFixed(2),
      this.itemService.events.toFixed(2),
      this.itemService.appointments.toFixed(2),
      this.itemService.notes.toFixed(2),
      this.itemService.tv.toFixed(2),
    ];

    this.modalRef = this.modalService.show(ModalGraphicComponent, {
      class: 'modal-dialog-top modal-lg',
    });

    console.log(this.itemService.valuesType);
  }
}
