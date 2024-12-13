import { TestBed } from '@angular/core/testing';

import { SharedMoviesSearchDataService } from './shared-movies-search-data.service';

describe('SharedMoviesSearchDataService', () => {
  let service: SharedMoviesSearchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMoviesSearchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
