import { TestBed } from '@angular/core/testing';

import { SwishService } from './swish.service';

describe('SwishService', () => {
  let service: SwishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
