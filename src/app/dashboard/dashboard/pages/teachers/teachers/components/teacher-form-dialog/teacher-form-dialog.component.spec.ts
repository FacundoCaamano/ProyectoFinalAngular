import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFormDialogComponent } from './teacher-form-dialog.component';

describe('TeacherFormDialogComponent', () => {
  let component: TeacherFormDialogComponent;
  let fixture: ComponentFixture<TeacherFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherFormDialogComponent]
    });
    fixture = TestBed.createComponent(TeacherFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
