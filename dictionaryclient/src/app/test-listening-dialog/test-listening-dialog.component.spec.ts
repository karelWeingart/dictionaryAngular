import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListeningDialogComponent } from './test-listening-dialog.component';

describe('TestListeningDialogComponent', () => {
  let component: TestListeningDialogComponent;
  let fixture: ComponentFixture<TestListeningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestListeningDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListeningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
