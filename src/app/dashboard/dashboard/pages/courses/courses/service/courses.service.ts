import { Injectable } from '@angular/core';
import { Courses } from '../models';
import { BehaviorSubject, Observable, of, take } from 'rxjs';


const COURSES_DB:Observable<Array<Courses>> =of([
  {
    "id":1,
    "name":'Angular',
    "duration":'3 month',
    "teacher":'jose'
  },
  {
    "id": 2,
    "name": "React",
    "duration": "2 months",
    "teacher": "Laura"
  },
  {
    "id": 3,
    "name": "Python",
    "duration": "4 months",
    "teacher": "Carlos"
  },
  {
    "id": 4,
    "name": "Java",
    "duration": "3 months",
    "teacher": "Ana"
  },
  {
    "id": 5,
    "name": "C#",
    "duration": "2.5 months",
    "teacher": "David"
  },
  {
    "id": 6,
    "name": "Swift",
    "duration": "2 months",
    "teacher": "Julia"
  }
  
])


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  private _courses$ = new BehaviorSubject<Array<Courses>>([])
  private courses$ = this._courses$.asObservable()

  constructor() { 

    
  }

  loadCourses():void{
    COURSES_DB.subscribe({
      next: (coursesDb) => this._courses$.next(coursesDb)
    })
  }
  getCourses():Observable<Array<Courses>>{
    return this.courses$
  }

  createCourse(course: Courses):void{
    this._courses$.pipe(take(1)).subscribe({
      next:(arrayACtual)=> this._courses$.next([...arrayACtual, course])
    })
  }

  
  updateById(id:number, courseUpdated:Courses):void{
    this._courses$.pipe(take(1)).subscribe({
      next: (arrayACtual) =>{
        this._courses$.next(
          arrayACtual.map((c) => c.id === id ?{...c, ...courseUpdated} : c)
          )
        }
      })
    }

    deleteById(id:number):void{
      this._courses$.pipe(take(1)).subscribe({
        next:(arrayActual) =>{
          this._courses$.next(
            arrayActual.filter(c => c.id !== id)
          )
        }
      })
    }
  }
