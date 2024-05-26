import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VollPruefModusComponent } from './voll-pruef-modus.component';

describe('VollPruefModusComponent', () => {
  let component: VollPruefModusComponent;
  let fixture: ComponentFixture<VollPruefModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VollPruefModusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VollPruefModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
