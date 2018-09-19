import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLogadoPage } from './tela-logado.page';

describe('TelaLogadoPage', () => {
  let component: TelaLogadoPage;
  let fixture: ComponentFixture<TelaLogadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaLogadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLogadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
