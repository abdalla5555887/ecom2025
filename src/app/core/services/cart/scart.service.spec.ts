import { TestBed } from '@angular/core/testing';

import { ScartService } from './scart.service';

describe('ScartService', () => {
  let service: ScartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
