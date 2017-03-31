import { TestBed, inject } from '@angular/core/testing';

import { StatementService } from './statement.service';

describe('StatementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatementService]
    });
  });

  it('should ...', inject([StatementService], (service: StatementService) => {
    expect(service).toBeTruthy();
  }));
});
