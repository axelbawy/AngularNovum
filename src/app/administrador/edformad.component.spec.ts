import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdformadComponent } from './edformad.component';

describe('EdformadComponent', () => {
  let component: EdformadComponent;
  let fixture: ComponentFixture<EdformadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdformadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdformadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
