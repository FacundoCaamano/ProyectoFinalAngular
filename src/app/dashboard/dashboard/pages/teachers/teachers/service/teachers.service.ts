import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { Teachers } from '../models';

const TEACHERS_DB:Observable<Array<Teachers>> = of([
  {
    id: 1,
    name:'Lucas',
    surname:'Pavan',
    course:'Angular'
  }
])


@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private _teachers$ = new BehaviorSubject<Array<Teachers>>([])
  private teachers$ = this._teachers$.asObservable()

  constructor() { }

  loadTeacher(){
    TEACHERS_DB.subscribe({
      next: (teachersDb) => {this._teachers$.next(teachersDb)}
    })
  }

  getTeacher():Observable<Array<Teachers>>{
    return this.teachers$
  }

  createTeacher(teacher:Teachers){
    this._teachers$.pipe(take(1)).subscribe({
      next:(arrayActual) => this._teachers$.next([...arrayActual, teacher])
    })
  }

  deleteTeacher(id:number){
    this._teachers$.pipe(take(1)).subscribe({
      next: arrayActual =>{
        this._teachers$.next(
          arrayActual.filter(t => id !== t.id)
        )
      }
    })
  }

  updateTeacher(id: number, teacherUpdated:Teachers){
    this._teachers$.pipe(take(1)).subscribe({
      next:(arrayActual) =>{
        this._teachers$.next(
          arrayActual.map(t => t.id === id ? { ...t,...teacherUpdated }: t)
        )
      }
    })
  }
}
