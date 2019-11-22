import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejasPage } from './cervejas.page';

describe('CervejasPage', () => {
  let component: CervejasPage;
  let fixture: ComponentFixture<CervejasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
