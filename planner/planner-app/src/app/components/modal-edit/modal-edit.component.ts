import { ItemsService } from '../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
})
export class ModalEditComponent implements OnInit {
  form!: FormGroup;

  type!: any;
  description!: any;
  where: any;
  obs!: any;
  id: any;
  currentWhere: any;
  tipo!: any;

  constructor(
    public bsModalRef: BsModalRef,
    public formBuilder: FormBuilder,
    private toastr: ToastrService,
    public itemService: ItemsService
  ) {}

  ngOnInit(): void {
    if ( this.type === 'task') {
      this.tipo = 'Tarefa';
    } else if ( this.type === 'event') {
      this.tipo = 'Evento';
    }  else if ( this.type === 'appointment') {
      this.tipo = 'Compromisso';
    } else if ( this.type === 'note') {
      this.tipo = 'Nota';
    } else if ( this.type === 'tv') {
      this.tipo = 'Tv/Filme';
    }

    this.createForm();
    this.currentWhere = this.where;
  }

  createForm(): any {
    this.form = this.formBuilder.group({
      type: [this.type, Validators.required],
      description: [this.description, Validators.required],
      where: [this.where, Validators.required],
      obs: [this.obs]
    });
  }

  async editItem(): Promise<any> {
    const checkValidation = this.validation();
    if (checkValidation) {
      await this.itemService.editItem(this.id, this.form.value);
      if (this.form.value.where === this.currentWhere) {
        await this.itemService.updateItems(this.currentWhere);
      } else {
        await this.itemService.updateItems(this.currentWhere);
        await this.itemService.updateItems(this.form.value.where);
      }
      this.cleanValues();
      this.itemService.currentId = null;
      this.bsModalRef.hide(); 
      this.toastr.success('Item editado com sucesso!');
    }
  }

  validation() {
    if (this.form.value.description === '') {
      this.toastr.error('É obrigatório preencher a descrição', 'Campos vazios');
      return false;
    } else {
      return true;
    }
  }

  cleanValues(): any {
    this.form.controls['type'].setValue('');
    this.form.controls['description'].setValue('');
    this.form.controls['where'].setValue('');
    this.form.controls['obs'].setValue('');
  }
}