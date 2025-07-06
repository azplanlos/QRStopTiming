import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stoppuhr } from './stoppuhr';

describe('Stoppuhr', () => {
  let component: Stoppuhr;
  let fixture: ComponentFixture<Stoppuhr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stoppuhr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stoppuhr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
