import { TestBed, inject } from '@angular/core/testing';

import { UserIdleService } from './angular-timeout.service';

describe('UserIdleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserIdleService]
    });
  });

  it('should be created', inject([UserIdleService], (service: UserIdleService) => {
    expect(service).toBeTruthy();
  }));
});
