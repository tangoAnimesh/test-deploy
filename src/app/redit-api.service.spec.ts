import { TestBed } from '@angular/core/testing';

import { ReditApiService } from './redit-api.service';

describe('ReditApiService', () => {
  let service: ReditApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReditApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
