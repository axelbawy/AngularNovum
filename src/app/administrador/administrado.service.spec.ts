import { TestBed } from '@angular/core/testing';

import { AdministradoService } from './administrado.service';

describe('AdministradoService', () => {
  let service: AdministradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
