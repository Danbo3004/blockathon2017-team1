import { TestBed, inject } from '@angular/core/testing';

import { InternalVenueService } from './internal-venue.service';

describe('InternalVenueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternalVenueService]
    });
  });

  it('should be created', inject([InternalVenueService], (service: InternalVenueService) => {
    expect(service).toBeTruthy();
  }));
});
