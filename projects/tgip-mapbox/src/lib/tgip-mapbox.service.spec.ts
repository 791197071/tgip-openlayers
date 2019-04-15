import { TestBed } from '@angular/core/testing';

import { TgipMapboxService } from './tgip-mapbox.service';

describe('TgipMapboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TgipMapboxService = TestBed.get(TgipMapboxService);
    expect(service).toBeTruthy();
  });
});
