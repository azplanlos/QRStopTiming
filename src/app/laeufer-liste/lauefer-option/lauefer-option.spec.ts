import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaueferOption } from './lauefer-option';

describe('LaueferOption', () => {
  let component: LaueferOption;
  let fixture: ComponentFixture<LaueferOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaueferOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaueferOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
