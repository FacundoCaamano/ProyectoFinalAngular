import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll-dialog',
  templateUrl: './enroll-dialog.component.html',
  styleUrls: ['./enroll-dialog.component.scss']
})
export class EnrollDialogComponent {

  courseIdControl = new FormControl(null, Validators.required)
  studentIdControl = new FormControl(null, Validators.required)

  inscriptionForm= new FormGroup({
    courseId:this.courseIdControl,
    studentId:this.studentIdControl 
  })
}
