import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElformadComponent } from './elformad.component';

describe('ElformadComponent', () => {
  let component: ElformadComponent;
  let fixture: ComponentFixture<ElformadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElformadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElformadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
