import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdformsubComponent } from './edformsub.component';

describe('EdformsubComponent', () => {
  let component: EdformsubComponent;
  let fixture: ComponentFixture<EdformsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdformsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdformsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
