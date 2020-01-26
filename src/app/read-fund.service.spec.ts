import { TestBed } from '@angular/core/testing';

import { ReadFundService } from './read-fund.service';

describe('ReadFundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadFundService = TestBed.get(ReadFundService);
    expect(service).toBeTruthy();
  });
});
