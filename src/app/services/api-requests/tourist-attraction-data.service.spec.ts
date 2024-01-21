import { TestBed } from '@angular/core/testing';

import { TouristAttractionDataService } from './tourist-attraction-data.service';

describe('TouristAttractionDataService', () => {
  let service: TouristAttractionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristAttractionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
