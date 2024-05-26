import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LernmodusComponent } from './lernmodus.component';

describe('LernmodusComponent', () => {
  let component: LernmodusComponent;
  let fixture: ComponentFixture<LernmodusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LernmodusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LernmodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
