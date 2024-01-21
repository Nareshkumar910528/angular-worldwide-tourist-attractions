import { TestBed } from '@angular/core/testing';

import { TouristAttractionDataResolver } from './tourist-attraction-data.resolver';

describe('TouristAttractionDataResolver', () => {
  let resolver: TouristAttractionDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TouristAttractionDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
