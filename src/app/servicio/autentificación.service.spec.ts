import { TestBed } from '@angular/core/testing';

import { AutentificaciónService } from './autentificación.service';

describe('AutentificaciónService', () => {
  let service: AutentificaciónService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentificaciónService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
