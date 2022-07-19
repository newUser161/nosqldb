import { TestBed } from '@angular/core/testing';

import { MaquinasServService } from './maquinas-serv.service';

describe('MaquinasServService', () => {
  let service: MaquinasServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquinasServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
