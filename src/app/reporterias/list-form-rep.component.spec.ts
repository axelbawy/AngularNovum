import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormRepComponent } from './list-form-rep.component';

describe('ListFormRepComponent', () => {
  let component: ListFormRepComponent;
  let fixture: ComponentFixture<ListFormRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFormRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
