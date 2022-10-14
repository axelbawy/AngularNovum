import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteriasComponent } from './reporterias.component';

describe('ReporteriasComponent', () => {
  let component: ReporteriasComponent;
  let fixture: ComponentFixture<ReporteriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
