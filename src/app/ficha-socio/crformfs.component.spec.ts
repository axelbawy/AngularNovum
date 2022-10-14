import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrformfsComponent } from './crformfs.component';

describe('CrformfsComponent', () => {
  let component: CrformfsComponent;
  let fixture: ComponentFixture<CrformfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrformfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrformfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
