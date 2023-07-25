import { Injectable } from '@angular/core';
import { Users } from '../models';
import { BehaviorSubject, Observable, of, take } from 'rxjs';


const USER_DB:Observable<Users[]> = of([
  {
    id:1,
    name: 'marcos',
    surname:'rodri',
    courses:'Angular',
    email:'rod@ds',
    password:'dsds',
  }
])

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:Users[]=[]

  private _users$ = new BehaviorSubject<Users[]>([])
  private user = this._users$.asObservable()

  constructor() { 

  }

  loadUser():void{
    USER_DB.subscribe({
      next: (usuariosFromDb) => this._users$.next(usuariosFromDb)
    })
  }

  getUsers():Observable<Users[]>{
    return this._users$
  }

  createUser(user: Users):void{
    this._users$.pipe(take(1)).subscribe({
      next:(arrayActual) =>{
        this._users$.next([...arrayActual,user])
      }
    })
  }

  updateById(id:number, usuarioActualizado:Users):void{
    this._users$.pipe(take(1)).subscribe({
      next:(arrayActual) =>{
        this._users$.next(
          arrayActual.map((u) => u.id === id ? {...u, ...usuarioActualizado} : u)
        )
      }
    })
  }

  deleteById(id:number):void{
    this._users$.pipe(take(1)).subscribe({
      next: (arrayActual) =>{
        this._users$.next(
          arrayActual.filter(u => u.id !== id)
        )
      }
    })
  }
}
