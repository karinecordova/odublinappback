import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocoesPage } from './promocoes.page';

describe('PromocoesPage', () => {
  let component: PromocoesPage;
  let fixture: ComponentFixture<PromocoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
