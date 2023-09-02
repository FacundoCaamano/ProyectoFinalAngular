import { Injectable } from '@angular/core';
import { CreateUser, UpdateUserData, Users } from '../models';
import { BehaviorSubject, Observable, map, mergeMap, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { generateRandomString } from 'src/app/shared/utils/tokenGenerate';
import { environment } from 'src/config/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {



  private _users$ = new BehaviorSubject<Users[]>([])
  private users$ = this._users$.asObservable()

  constructor(private httpClient:HttpClient) { 

  }

  loadUser():void{
    
    this.httpClient.get<Array<Users>>(environment.API_URL + "/users").subscribe({
      next:(response) => 
      {
        this._users$.next(response)
        console.log(Response);
      } 
      
    })
    
    
  }
  
  getUsers():Observable<Users[]>{
    return this.users$
  }
  
  createUser(payload: CreateUser):void{
    const token = generateRandomString(20)
    this.httpClient.post<Users>(environment.API_URL + "/users", {...payload, token})
      .pipe(
        mergeMap((userCreate) => this.users$.pipe(
        take(1),
        map(
          (arrayActual)=>[...arrayActual, userCreate])
          )
          )
      )  
      .subscribe({ 
        next:(arrayActualizado)=>{
          this._users$.next(arrayActualizado)
        }
    })
  }

  updateById(id:number, userUpdated:UpdateUserData):void{
    this.httpClient.put(environment.API_URL + "/users/"+ id, userUpdated).subscribe({
      next:() =>{
        this.loadUser()
        
      }
    })
  }

  deleteById(id:number):void{
    this.httpClient.delete(environment.API_URL + "/users/" + id)
    .pipe(
      mergeMap((responseUserDelete)=>
        this._users$.pipe(take(1), map((arrayACtual) => arrayACtual.filter((u) => u.id !== id))
      )
    )
    ).subscribe({
      next:(arrayActualizado) => 
        this._users$.next(arrayActualizado)
      ,
    })
  }

  getById(id:number):Observable<Users | undefined>{
    this.loadUser()
    return this.users$.pipe(
      map((users) => users.find((u) => u.id ===id))
      )
  }

}
