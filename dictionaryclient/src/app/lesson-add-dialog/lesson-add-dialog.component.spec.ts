import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonAddDialogComponent } from './lesson-add-dialog.component';

describe('LessonAddDialogComponent', () => {
  let component: LessonAddDialogComponent;
  let fixture: ComponentFixture<LessonAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
