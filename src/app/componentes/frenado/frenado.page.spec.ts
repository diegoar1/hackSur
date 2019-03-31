import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenadoPage } from './frenado.page';

describe('FrenadoPage', () => {
  let component: FrenadoPage;
  let fixture: ComponentFixture<FrenadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
