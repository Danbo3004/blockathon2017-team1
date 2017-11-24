import { TestBed, inject } from '@angular/core/testing';

import { InternalHomeService } from './internal-home.service';

describe('InternalHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternalHomeService]
    });
  });

  it('should be created', inject([InternalHomeService], (service: InternalHomeService) => {
    expect(service).toBeTruthy();
  }));
});
