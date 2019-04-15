import { TestBed } from '@angular/core/testing';

import { TgipBusinessService } from './tgip-business.service';

describe('TgipBusinessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TgipBusinessService = TestBed.get(TgipBusinessService);
    expect(service).toBeTruthy();
  });
});
