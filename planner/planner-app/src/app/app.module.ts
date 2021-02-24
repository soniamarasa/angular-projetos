import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule, ThemeService } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { NgxSimpleCalendarModule } from 'ngx-simple-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BodyComponent } from './modules/body/body.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ActionsItemComponent } from './components/actions-item/actions-item.component';
import { ActionsPlannerComponent } from './components/actions-planner/actions-planner.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
import { ModalGraphicComponent } from './components/modal-graphic/modal-graphic.component';
import { ModalResetComponent } from './components/modal-reset/modal-reset.component';
import { NotesTodoComponent } from './components/notes-todo/notes-todo.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TitleComponent } from './components/title/title.component';
import { WeekDaysComponent } from './components/week-days/week-days.component';
import { DatesService } from './services/dates.service';
import { ItemsService } from './services/items.service';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    ActionsItemComponent,
    ActionsPlannerComponent,
    CalendarComponent,
    GraphicComponent,
    ModalEditComponent,
    ModalGraphicComponent,
    ModalResetComponent,
    NotesTodoComponent,
    TaskFormComponent,
    TitleComponent,
    WeekDaysComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxSimpleCalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ChartsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgbModule,
  ],
  providers: [DatesService, ThemeService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
