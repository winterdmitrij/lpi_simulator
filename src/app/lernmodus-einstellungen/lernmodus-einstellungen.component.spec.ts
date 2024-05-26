import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LernmodusEinstellungenComponent } from './lernmodus-einstellungen.component';

describe('LernmodusEinstellungenComponent', () => {
  let component: LernmodusEinstellungenComponent;
  let fixture: ComponentFixture<LernmodusEinstellungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LernmodusEinstellungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LernmodusEinstellungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
