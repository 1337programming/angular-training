import { TestBed, inject } from '@angular/core/testing';

import { StatementInfoService } from './statement-info.service';

describe('StatementInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatementInfoService]
    });
  });

  it('should ...', inject([StatementInfoService], (service: StatementInfoService) => {
    expect(service).toBeTruthy();
  }));
});
