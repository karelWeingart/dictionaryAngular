import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsSelectComponent } from './lessons-select.component';

describe('LessonsSelectComponent', () => {
  let component: LessonsSelectComponent;
  let fixture: ComponentFixture<LessonsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
