import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaSocioComponent } from './ficha-socio.component';

describe('FichaSocioComponent', () => {
  let component: FichaSocioComponent;
  let fixture: ComponentFixture<FichaSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
