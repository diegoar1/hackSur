import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvelocidadPage } from './evelocidad.page';

describe('EvelocidadPage', () => {
  let component: EvelocidadPage;
  let fixture: ComponentFixture<EvelocidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvelocidadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvelocidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
