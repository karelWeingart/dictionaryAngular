import { TestBed } from '@angular/core/testing';

import { TestItServiceService } from './test-it-service.service';

describe('TestItServiceService', () => {
  let service: TestItServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestItServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
