import { TestBed } from '@angular/core/testing';

import { DiagnosisResultService } from './diagnosis-result.service';

describe('DiagnosisResultService', () => {
  let service: DiagnosisResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosisResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
