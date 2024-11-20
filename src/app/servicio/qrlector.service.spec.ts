import { TestBed } from '@angular/core/testing';

import { QRlectorService } from './qrlector.service';

describe('QRlectorService', () => {
  let service: QRlectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QRlectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
