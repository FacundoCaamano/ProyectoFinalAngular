import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { InscriptionActions } from '../../store/inscription.actions';
import { Observable } from 'rxjs';
import { Student } from '../../../../students/students/models';
import { selectCourseOptions, selectStudentsOptions } from '../../store/inscription.selectors';
import { Courses } from '../../../../courses/courses/models';

@Component({
  selector: 'app-enroll-dialog',
  templateUrl: './enroll-dialog.component.html',
  styleUrls: ['./enroll-dialog.component.scss']
})
export class EnrollDialogComponent implements OnInit {

  courseIdControl = new FormControl(null, Validators.required)
  studentIdControl = new FormControl(null, Validators.required)

  inscriptionForm= new FormGroup({
    courseId:this.courseIdControl,
    studentId:this.studentIdControl 
  })

  studentsOptions$:Observable<Array<Student>>
  courseOptions$:Observable<Array<Courses>>

  constructor(private store:Store){
    this.studentsOptions$= this.store.select(selectStudentsOptions)
    this.courseOptions$ = this.store.select(selectCourseOptions)
  }
  ngOnInit(): void {
    this.store.dispatch(InscriptionActions.loadStudentsOptions())
    this.store.dispatch(InscriptionActions.loadCourseOptions())
  }

  onSubmit():void{
    if(this.inscriptionForm.invalid){
      this.inscriptionForm.markAllAsTouched()
    }else{
      console.log(this.inscriptionForm.getRawValue());
      this.store.dispatch(InscriptionActions.enroll({payload: this.inscriptionForm.getRawValue()}))
    }
  }
}
