import { TestBed } from '@angular/core/testing';

import { repoService } from './register.service';

describe('RegisterService', () => {
  let service: repoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(repoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
