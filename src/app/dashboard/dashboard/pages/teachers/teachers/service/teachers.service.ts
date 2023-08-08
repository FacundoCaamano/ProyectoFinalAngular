import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, of, take } from 'rxjs';
import { Teachers } from '../models';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private _teachers$ = new BehaviorSubject<Array<Teachers>>([])
  private teachers$ = this._teachers$.asObservable()

  constructor(private httpClient:HttpClient) { }

  loadTeacher(){
    this.httpClient.get<Array<Teachers>>("http://localhost:3000/teachers").subscribe({
      next:(response) => {
        this._teachers$.next(response)
      }
    })
  }

  getTeacher():Observable<Array<Teachers>>{
    return this.teachers$
  }

  createTeacher(teacher:Teachers){
    this.httpClient.post<Teachers>("http://localhost:3000/teachers", teacher)
    .pipe(
      mergeMap((teacherCreate) => this._teachers$.pipe(take(1),
      map(
        (arrayActual)=>[...arrayActual, teacher]
        )))
    )  
    .subscribe({ 
      next:(arrayActualizado)=>{
        this._teachers$.next(arrayActualizado)
      }
  })
  }

  deleteTeacher(id:number){
    this.httpClient.delete("http://localhost:3000/teachers/" + id)
    .pipe(
      take(1),
      mergeMap((responseTeacherDelete)=>
        this._teachers$.pipe(take(1), map((arrayActual) => arrayActual.filter(t => t.id !== id)))
      )
      )
    .subscribe({
      next:(arrayUpdated)=>{
        this._teachers$.next(arrayUpdated)
      }
    })
  }

  updateTeacher(id: number, teacherUpdated:Teachers){
    this.httpClient.put("http://localhost:3000/teachers/" + id , teacherUpdated).subscribe({
      next: () =>{
        this.loadTeacher()
      }
    })
  }
}
