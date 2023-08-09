import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Users } from "src/app/dashboard/dashboard/pages/users/users/models";
import { LoginPayload } from "../models";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authUser$ = new BehaviorSubject<Users | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(
     private router: Router,
     private httpClient:HttpClient
     ) {}


  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<Array<Users>>('http://localhost:3000/users',{
      params:{
        token:localStorage.getItem('token') || ''
      }
    }).pipe(
      map((userResult)=>{
        return !!userResult.length
      })
    )
  }

  login(payload: LoginPayload): void {
    this.httpClient.get<Array<Users>>('http://localhost:3000/users',{
      params:{
        email:payload.email || '',
        password:payload.password || ''
      }
    }).subscribe({
      next:(response)=>{
        if(response.length){

          const authUser= response[0]

          this._authUser$.next(authUser)
          this.router.navigate(['/dashboard'])
          localStorage.setItem('token', authUser.token)
        }else{
          alert('No identificado')
          this._authUser$.next(null)
        }
      }
    })
  }
}