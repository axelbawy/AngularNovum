import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElformfsComponent } from './elformfs.component';

describe('ElformfsComponent', () => {
  let component: ElformfsComponent;
  let fixture: ComponentFixture<ElformfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElformfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElformfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
