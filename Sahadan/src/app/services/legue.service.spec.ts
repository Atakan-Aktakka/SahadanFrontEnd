import { TestBed } from '@angular/core/testing';

import { LegueService } from './legue.service';

describe('LegueService', () => {
  let service: LegueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
