import { Injectable } from '@angular/core';
import { Users } from '../models';
import { BehaviorSubject, Observable, map, of, take } from 'rxjs';


const USER_DB:Observable<Users[]> = of([
  {
    id:1,
    name: 'Marcos',
    surname:'Narambuena',
    courses:'Angular',
    email:'marnar@yahoo.com',
    password:'123456',
  },
  {
    "id": 2,
    "name": "Laura",
    "surname": "González",
    "courses": "React",
    "email": "laura@example.com",
    "password": "abc123"
  },
  {
    "id": 3,
    "name": "Carlos",
    "surname": "Martínez",
    "courses": "Python",
    "email": "carlos@gmail.com",
    "password": "qwerty"
  },
  {
    "id": 4,
    "name": "Ana",
    "surname": "García",
    "courses": "Java",
    "email": "ana.garcia@mail.com",
    "password": "password123"
  },
  {
    "id": 5,
    "name": "David",
    "surname": "López",
    "courses": "C#",
    "email": "david.lopez@example.org",
    "password": "securepass"
  },
  {
    "id": 6,
    "name": "Julia",
    "surname": "Pérez",
    "courses": "Swift",
    "email": "julia.perez@gmail.com",
    "password": "mypassword"
  }
])

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private _users$ = new BehaviorSubject<Users[]>([])
  private users$ = this._users$.asObservable()

  constructor() { 

  }

  loadUser():void{
    USER_DB.subscribe({
      next: (usuariosFromDb) => this._users$.next(usuariosFromDb)
    })
  }

  getUsers():Observable<Users[]>{
    return this.users$
  }

  createUser(user: Users):void{
    this.users$.pipe(take(1)).subscribe({
      next:(arrayActual) =>{
        this._users$.next([...arrayActual,user])
      }
    })
  }

  updateById(id:number, usuarioActualizado:Users):void{
    this.users$.pipe(take(1)).subscribe({
      next:(arrayActual) =>{
        this._users$.next(
          arrayActual.map((u) => u.id === id ? {...u, ...usuarioActualizado} : u)
        )
      }
    })
  }

  deleteById(id:number):void{
    this.users$.pipe(take(1)).subscribe({
      next: (arrayActual) =>{
        this._users$.next(
          arrayActual.filter(u => u.id !== id)
        )
      }
    })
  }

  getById(id:number):Observable<Users | undefined>{
    return this.users$.pipe(
      map((users) => users.find((u) => u.id ===id))
      )
  }
}
