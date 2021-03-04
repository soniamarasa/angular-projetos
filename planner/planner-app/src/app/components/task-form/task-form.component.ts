import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  form!: FormGroup;
  getWhere: any;
  @ViewChildren('checkbox') checkboxes!: QueryList<ElementRef>; // variavel checkboxes das diretivas #checkbox

  constructor(
    public formBuilder: FormBuilder,
    private toastr: ToastrService,
    private itemService: ItemsService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm(): any {
    this.form = this.formBuilder.group({
      type: ['task', Validators.required],
      description: ['', Validators.required],
      where: this.formBuilder.array([], Validators.required),
    });
  }

  async newItem(): Promise<any> {
    const checkValidation = this.validation();
    if (checkValidation) {
      await this.itemService.newItem(this.form.value);
      this.form.value.where.forEach(async (key: any) => {
        let updateItems = await this.itemService.renderItems(key);

        if (this.itemService.items.length === 0) {
          this.itemService.items.push({ day: key, itemsDay: updateItems });
          this.itemService.keys.push(key);
        } else {
          this.itemService.items.forEach((dayWithItens: any) => {
            if (this.itemService.keys.includes(key)) {
              if (dayWithItens.day === key) {
                dayWithItens.itemsDay = updateItems;
              }
            } else {
              this.itemService.items.push({ day: key, itemsDay: updateItems });
              this.itemService.keys.push(key);
            }
          });
        }
        updateItems = this.itemService.idOrder(updateItems);
        this.itemService.items.forEach((day: any) => {
          if (day.day === key) {
            day.itemsDay.sort((a: any, b: any) => {
              return a.id - b.id;
            });
          }
        });
      });
      this.cleanValues();
      this.toastr.success('Item lançado com sucesso!');
    }
  }

  cleanValues(): any {
    this.form.controls['type'].setValue('task');
    this.form.controls['description'].setValue('');
    (this.form.get('where') as FormArray).clear();
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

  onCheckChange(event: any): any {
    const formArray: FormArray = this.form.get('where') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i = 0;
      formArray.controls.forEach((item) => {
        if (item.value === event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    this.getWhere = formArray.value;
  }

  validation() {
    if (
      this.form.value.description === '' ||
      this.form.value.where.length === 0
    ) {
      this.toastr.error(
        'É obrigatório preencher/marcar uma opção',
        'Campos vazios'
      );
      return false;
    } else {
      return true;
    }
  }
}
