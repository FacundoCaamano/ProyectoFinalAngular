import { Injectable } from '@angular/core';
import { Courses } from '../models';
import { BehaviorSubject, Observable, map, mergeMap, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const COURSES_DB:Observable<Array<Courses>> =of([
  {
    "id":1,
    "name":'Angular',
    "duration":'3 month',
    "teacher":'jose'
  }
])


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  private _courses$ = new BehaviorSubject<Array<Courses>>([])
  private courses$ = this._courses$.asObservable()

  constructor(private httpClient:HttpClient) { }

  loadCourses():void{
    this.httpClient.get<Array<Courses>>('http://localhost:3000/courses').subscribe({
      next:(response) =>{
        this._courses$.next(response)
      }
    })
  }
  getCourses():Observable<Array<Courses>>{
    return this.courses$
  }

  createCourse(course: Courses):void{
    this.httpClient.post("http://localhost:3000/courses", course)
    .pipe(
      mergeMap((courseCreate) => this._courses$.pipe(take(1),
      map(
        (arrayActual)=> [...arrayActual, course]
      )
      ))
    ).subscribe({
      next:(arrayActualizado)=>{
        this._courses$.next(arrayActualizado)
      }
    })
  }

  
  updateById(id:number, courseUpdated:Courses):void{
     this.httpClient.put("http://localhost:3000/courses/" + id, courseUpdated).subscribe({
      next:()=> this.loadCourses()
     })
    }

    deleteById(id:number):void{
      this.httpClient.delete("http://localhost:3000/courses/" + id)
      .pipe(
        mergeMap((responseCourseDelete)=>
          this._courses$.pipe(take(1), map((arrayACtual) => arrayACtual.filter((c) => c.id !== id))
        )
      )
      ).subscribe({
        next:(arrayActualizado) => 
          this._courses$.next(arrayActualizado)
        ,
      })
    }
  }
