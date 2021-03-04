import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ItemsService } from '../../services/items.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-modal-reset',
  templateUrl: './modal-reset.component.html',
  styleUrls: ['./modal-reset.component.css'],
})
export class ModalResetComponent implements OnInit {
  constructor(
    public bsModalRef: BsModalRef,
    private themeService: ThemeService,
    private itemService: ItemsService
  ) {}

  ngOnInit(): void {}

  async reset(): Promise<any> {
    localStorage.clear();
    this.themeService.theme = 'light';
    await this.itemService.resetData();
    this.itemService.items = [];
    this.itemService.keys = [];
    this.bsModalRef.hide();
  }
}
