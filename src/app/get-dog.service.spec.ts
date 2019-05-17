import { TestBed } from '@angular/core/testing';

import { GetDogService } from './get-dog.service';

describe('GetDogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDogService = TestBed.get(GetDogService);
    expect(service).toBeTruthy();
  });
});
