import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Teachers } from '../../models';

@Component({
  selector: 'app-teacher-form-dialog',
  templateUrl: './teacher-form-dialog.component.html',
  styleUrls: ['./teacher-form-dialog.component.scss']
})
export class TeacherFormDialogComponent {
  editingTeacher?:Teachers
  nameControl = new FormControl<string|null>(null, Validators.required)
  surnameControl = new FormControl<string|null>(null, Validators.required)
  courseControl = new FormControl<string|null>(null, Validators.required)


  teacherForm= new FormGroup({
    name:this.nameControl,
    surname:this.surnameControl,
    course:this.courseControl
  })

  
  constructor(
    private dialogRef: MatDialogRef<TeacherFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?:Teachers
  ){
    if(this.data){
      this.editingTeacher = this.data
      this.nameControl.setValue(this.data.name)
      this.surnameControl.setValue(this.data.surname)
      this.courseControl.setValue(this.data.course)
    }
  }

  onSubmit():void{
    if(this.teacherForm.invalid){
      this.teacherForm.markAllAsTouched()
    }else{
      alert('Updated information')
      this.dialogRef.close(this.teacherForm.value)
    }
  }
}
