import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrformadComponent } from './crformad.component';

describe('CrformadComponent', () => {
  let component: CrformadComponent;
  let fixture: ComponentFixture<CrformadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrformadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrformadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
