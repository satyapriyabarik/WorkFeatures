import { TestBed, inject } from '@angular/core/testing';

import { YouCouchService } from './you-couch.service';

xdescribe('YouCouchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YouCouchService]
    });
  });

  it('should be created', inject([YouCouchService], (service: YouCouchService) => {
    expect(service).toBeTruthy();
  }));
});
