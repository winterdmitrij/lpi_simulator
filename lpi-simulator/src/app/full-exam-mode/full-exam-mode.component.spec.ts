import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullExamModeComponent } from './full-exam-mode.component';

describe('FullExamModeComponent', () => {
  let component: FullExamModeComponent;
  let fixture: ComponentFixture<FullExamModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullExamModeComponent]
    });
    fixture = TestBed.createComponent(FullExamModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
