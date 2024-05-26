import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeilPruefModusComponent } from './teil-pruef-modus.component';

describe('TeilPruefModusComponent', () => {
  let component: TeilPruefModusComponent;
  let fixture: ComponentFixture<TeilPruefModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeilPruefModusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeilPruefModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
