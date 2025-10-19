import { TestBed } from '@angular/core/testing';

import { LaeuferInfo } from './laeufer-info';

describe('LaeuferInfo', () => {
  let service: LaeuferInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaeuferInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
