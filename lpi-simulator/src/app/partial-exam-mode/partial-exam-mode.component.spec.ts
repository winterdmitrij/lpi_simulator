import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialExamModeComponent } from './partial-exam-mode.component';

describe('PartialExamModeComponent', () => {
  let component: PartialExamModeComponent;
  let fixture: ComponentFixture<PartialExamModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialExamModeComponent]
    });
    fixture = TestBed.createComponent(PartialExamModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
