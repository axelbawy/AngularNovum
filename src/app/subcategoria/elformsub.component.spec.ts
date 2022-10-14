import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElformsubComponent } from './elformsub.component';

describe('ElformsubComponent', () => {
  let component: ElformsubComponent;
  let fixture: ComponentFixture<ElformsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElformsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElformsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
