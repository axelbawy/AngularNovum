import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElformfavComponent } from './elformfav.component';

describe('ElformfavComponent', () => {
  let component: ElformfavComponent;
  let fixture: ComponentFixture<ElformfavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElformfavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElformfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
