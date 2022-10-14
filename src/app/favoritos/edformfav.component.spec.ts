import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdformfavComponent } from './edformfav.component';

describe('EdformfavComponent', () => {
  let component: EdformfavComponent;
  let fixture: ComponentFixture<EdformfavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdformfavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdformfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
