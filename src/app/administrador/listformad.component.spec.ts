import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformadComponent } from './listformad.component';

describe('ListformadComponent', () => {
  let component: ListformadComponent;
  let fixture: ComponentFixture<ListformadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListformadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListformadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
