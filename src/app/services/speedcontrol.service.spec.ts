import { TestBed, inject } from '@angular/core/testing';

import { SpeedcontrolService } from './speedcontrol.service';

describe('SpeedcontrolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedcontrolService]
    });
  });

  it('should be created', inject([SpeedcontrolService], (service: SpeedcontrolService) => {
    expect(service).toBeTruthy();
  }));
});
