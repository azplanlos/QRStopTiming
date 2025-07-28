import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaeuferListe } from './laeufer-liste';

describe('LaeuferListe', () => {
  let component: LaeuferListe;
  let fixture: ComponentFixture<LaeuferListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaeuferListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaeuferListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
