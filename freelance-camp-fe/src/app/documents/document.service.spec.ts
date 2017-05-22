import { TestBed, inject } from '@angular/core/testing';

import { DocumentService } from './document.service';

describe('DocumentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentServiceService]
    });
  });

  it('should be created', inject([DocumentServiceService], (service: DocumentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
