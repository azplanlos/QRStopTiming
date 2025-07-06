import { TestBed } from '@angular/core/testing';

import { Zeit } from './zeit';

describe('Zeit', () => {
  let service: Zeit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Zeit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
