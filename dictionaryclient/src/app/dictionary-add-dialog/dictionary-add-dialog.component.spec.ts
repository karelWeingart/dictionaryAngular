import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryAddDialogComponent } from './dictionary-add-dialog.component';

describe('DictionaryAddDialogComponent', () => {
  let component: DictionaryAddDialogComponent;
  let fixture: ComponentFixture<DictionaryAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
