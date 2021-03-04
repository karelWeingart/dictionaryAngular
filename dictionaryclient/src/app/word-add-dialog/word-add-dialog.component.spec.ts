import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordAddDialogComponent } from './word-add-dialog.component';

describe('WordAddDialogComponent', () => {
  let component: WordAddDialogComponent;
  let fixture: ComponentFixture<WordAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
