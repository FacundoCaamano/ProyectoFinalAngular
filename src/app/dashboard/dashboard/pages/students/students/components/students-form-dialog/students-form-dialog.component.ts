import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';
import { CourseService } from '../../../../courses/courses/service/courses.service';
import { Observable } from 'rxjs';
import { Courses } from '../../../../courses/courses/models';

@Component({
  selector: 'app-students-form-dialog',
  templateUrl: './students-form-dialog.component.html',
  styleUrls: ['./students-form-dialog.component.scss']
})
export class StudentsFormDialogComponent {
  public course$: Observable<Array<Courses>>
  selected = 'option2';
  editingUser?: Student;


  nameControl = new FormControl<string|null>(null, Validators.required)
  emailControl = new FormControl<string | null>(null, Validators.required)
  surnameControl = new FormControl<string | null>(null, Validators.required)
  courseControl = new FormControl<string|null>(null,Validators.required)

  studentForm = new FormGroup({
    name:this.nameControl,
    email:this.emailControl,
    surname:this.surnameControl,
    course:this.courseControl
  })

  constructor(
    private dialogRef: MatDialogRef<StudentsFormDialogComponent>,
    private courseService:CourseService,
    @Inject(MAT_DIALOG_DATA) private data?:Student
  ){
    this.courseService.loadCourses()
    this.course$ = this.courseService.getCourses()
    
    

    if(this.data){
      this.editingUser = this.data;
      this.nameControl.setValue(this.data.name)
      this.emailControl.setValue(this.data.email)
      this.surnameControl.setValue(this.data.surname)
      this.courseControl.setValue(this.data.course)
    }
  }

  onSubmit():void{
    if(this.studentForm.invalid){
      this.studentForm.markAllAsTouched()
    }else{
      alert('Updated information')
      this.dialogRef.close(this.studentForm.value)
    }
  }

}
