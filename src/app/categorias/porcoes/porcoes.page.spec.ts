import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcoesPage } from './porcoes.page';

describe('PorcoesPage', () => {
  let component: PorcoesPage;
  let fixture: ComponentFixture<PorcoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
