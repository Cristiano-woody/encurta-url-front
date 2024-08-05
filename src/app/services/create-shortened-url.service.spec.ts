import { TestBed } from '@angular/core/testing';

import { CreateShortenedUrlService } from './create-shortened-url.service';

describe('CreateShortenedUrlService', () => {
  let service: CreateShortenedUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateShortenedUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
