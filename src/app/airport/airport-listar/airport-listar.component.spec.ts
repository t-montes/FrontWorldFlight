/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirportListarComponent } from './airport-listar.component';

describe('AirportListarComponent', () => {
  let component: AirportListarComponent;
  let fixture: ComponentFixture<AirportListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
