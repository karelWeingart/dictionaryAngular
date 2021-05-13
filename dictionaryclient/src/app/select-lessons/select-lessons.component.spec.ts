import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLessonsComponent } from './select-lessons.component';

describe('SelectLessonsComponent', () => {
  let component: SelectLessonsComponent;
  let fixture: ComponentFixture<SelectLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
