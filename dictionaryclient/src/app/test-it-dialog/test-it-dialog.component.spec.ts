import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestItDialogComponent } from './test-it-dialog.component';

describe('TestItDialogComponent', () => {
  let component: TestItDialogComponent;
  let fixture: ComponentFixture<TestItDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestItDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestItDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
