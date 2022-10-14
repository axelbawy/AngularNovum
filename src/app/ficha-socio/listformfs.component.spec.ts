import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformfsComponent } from './listformfs.component';

describe('ListformfsComponent', () => {
  let component: ListformfsComponent;
  let fixture: ComponentFixture<ListformfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListformfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListformfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
