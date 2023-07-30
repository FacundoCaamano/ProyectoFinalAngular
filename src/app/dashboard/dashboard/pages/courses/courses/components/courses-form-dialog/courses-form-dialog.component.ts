import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Courses } from '../../models';

@Component({
  selector: 'app-courses-form-dialog',
  templateUrl: './courses-form-dialog.component.html',
  styleUrls: ['./courses-form-dialog.component.scss']
})
export class CoursesFormDialogComponent {
  nameControl = new FormControl<string|null>(null, Validators.required)
  durationControl = new FormControl<string | null>(null, Validators.required)
  teacherControl = new FormControl<string|null>(null,Validators.required)

  coursesForm = new FormGroup({
    name:this.nameControl,
    duration:this.durationControl,
    teacher:this.teacherControl
  })

  constructor(
    private dialogRef: MatDialogRef<CoursesFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?:Courses
  ){
    if(this.data){
      this.nameControl.setValue(this.data.name)
      this.durationControl.setValue(this.data.duration)
      this.teacherControl.setValue(this.data.teacher)
    }
  }

  onSubmit():void{
    if(this.coursesForm.invalid){
      this.coursesForm.markAllAsTouched()
    }else{
      alert('Updated information')
      this.dialogRef.close(this.coursesForm.value)
    }
  }

}
