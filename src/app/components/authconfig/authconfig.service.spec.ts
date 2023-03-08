import { TestBed } from '@angular/core/testing';

import { AuthConfigService } from './authconfig.service';

describe('AuthconfigService', () => {
  let service: AuthConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
