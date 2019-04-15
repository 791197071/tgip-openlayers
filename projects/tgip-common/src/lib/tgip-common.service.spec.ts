import { TestBed } from '@angular/core/testing';

import { TgipCommonService } from './tgip-common.service';

describe('TgipCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TgipCommonService = TestBed.get(TgipCommonService);
    expect(service).toBeTruthy();
  });
});
