import { ItemsService } from '../../services/items.service';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-actions-item',
  templateUrl: './actions-item.component.html',
  styleUrls: ['./actions-item.component.css'],
})
export class ActionsItemComponent implements OnInit {
  @Input() type!: any;
  @Input() description!: any;
  @Input() obs!: any;
  @Input() where: any;
  @Input() id: any;
  modalRef!: BsModalRef;

  @Input() finished!: string;
  @Input() started!: string;
  @Input() canceled!: string;
  @Input() important!: string;

  constructor(
    public itemService: ItemsService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {}

  modalEditItem(): any {
    const initialState = {
      id: this.id,
      type: this.type,
      description: this.description,
      obs: this.obs,
      where: this.where,
    };
    this.modalRef = this.modalService.show(ModalEditComponent, {
      class: 'modal-dialog-top modal-lg',
      initialState,
    });
  }
}