import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrformfavComponent } from './crformfav.component';

describe('CrformfavComponent', () => {
  let component: CrformfavComponent;
  let fixture: ComponentFixture<CrformfavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrformfavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrformfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
