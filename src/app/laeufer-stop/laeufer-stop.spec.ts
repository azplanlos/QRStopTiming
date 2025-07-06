import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaeuferStop } from './laeufer-stop';

describe('LaeuferStop', () => {
  let component: LaeuferStop;
  let fixture: ComponentFixture<LaeuferStop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaeuferStop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaeuferStop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
