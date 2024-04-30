import { TestBed } from '@angular/core/testing';

import { VetCenterService } from './vet-center.service';

describe('VetCenterService', () => {
  let service: VetCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
