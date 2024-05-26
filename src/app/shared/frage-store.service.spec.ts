import { TestBed } from '@angular/core/testing';

import { FrageStoreService } from './frage-store.service';

describe('FrageStoreService', () => {
  let service: FrageStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrageStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
