import { TestBed, inject } from '@angular/core/testing';

import { SampleStateService } from './sample-state.service';

describe('SampleStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleStateService]
    });
  });

  it('should ...', inject([SampleStateService], (service: SampleStateService) => {
    expect(service).toBeTruthy();
  }));
});
