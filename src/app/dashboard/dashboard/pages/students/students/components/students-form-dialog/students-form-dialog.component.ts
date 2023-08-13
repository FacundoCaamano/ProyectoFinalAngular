import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';

@Component({
  selector: 'app-students-form-dialog',
  templateUrl: './students-form-dialog.component.html',
  styleUrls: ['./students-form-dialog.component.scss']
})
export class StudentsFormDialogComponent {
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
    @Inject(MAT_DIALOG_DATA) private data?:Student
  ){
    if(this.data){
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
