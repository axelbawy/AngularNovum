import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdformfsComponent } from './edformfs.component';

describe('EdformfsComponent', () => {
  let component: EdformfsComponent;
  let fixture: ComponentFixture<EdformfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdformfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdformfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
