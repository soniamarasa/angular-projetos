import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesTodoComponent } from './notes-todo.component';

describe('NotesTodoComponent', () => {
  let component: NotesTodoComponent;
  let fixture: ComponentFixture<NotesTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
