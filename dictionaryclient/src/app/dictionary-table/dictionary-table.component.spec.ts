import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryTableComponent } from './dictionary-table.component';

describe('DictionaryTableComponent', () => {
  let component: DictionaryTableComponent;
  let fixture: ComponentFixture<DictionaryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
