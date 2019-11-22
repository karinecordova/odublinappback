import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestiladosPage } from './destilados.page';

describe('DestiladosPage', () => {
  let component: DestiladosPage;
  let fixture: ComponentFixture<DestiladosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestiladosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestiladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
