import { Injectable } from '@angular/core';
import { Courses } from '../models';
import { BehaviorSubject, Observable, map, mergeMap, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environmentProd';




@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = environment.API_URL
  private _courses$ = new BehaviorSubject<Array<Courses>>([])
  private courses$ = this._courses$.asObservable()

  constructor(private httpClient:HttpClient) { }

  loadCourses():void{
    this.httpClient.get<Array<Courses>>(this.baseUrl + "courses").subscribe({
      next:(response) =>{
        this._courses$.next(response)
      }
    })
  }
  getCourses():Observable<Array<Courses>>{
    return this.courses$
  }

  createCourse(course: Courses):void{
    this.httpClient.post(this.baseUrl + "courses", course)
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
     this.httpClient.put(this.baseUrl + "courses/" + id, courseUpdated).subscribe({
      next:()=> this.loadCourses()
     })
    }

    deleteById(id:number):void{
      this.httpClient.delete(this.baseUrl + "courses/" + id)
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

    getById(id:number):Observable<Courses | undefined>{
      this.loadCourses()
      return this.courses$.pipe(
        map((course) => course.find((c) => c.id === id))
        )
    }
  }
