import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceleracionPage } from './aceleracion.page';

describe('AceleracionPage', () => {
  let component: AceleracionPage;
  let fixture: ComponentFixture<AceleracionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceleracionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceleracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
