import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Users } from "src/app/dashboard/dashboard/pages/users/users/models";
import { LoginPayload } from "../models";
import { environment } from "src/config/environment";
import { Store } from "@ngrx/store";
import { AuthActions } from "src/app/store/auth/auth.actions";

@Injectable({ providedIn: 'root' })
export class AuthService {
  

  constructor(
     private router: Router,
     private httpClient:HttpClient,
     private store:Store
     ) {}


  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<Array<Users>>(environment.API_URL + '/users',{
      params:{
        token:localStorage.getItem('token') || ''
      }
    }).pipe(
      map((userResult)=>{
        if(userResult.length){
          const authUser = userResult[0]
          this.store.dispatch(AuthActions.setAuthUser({data: authUser}))
          
        }
        return !!userResult.length
      })
    )
  }

  login(payload: LoginPayload): void {
    this.httpClient.get<Array<Users>>(environment.API_URL + '/users',{
      params:{
        email:payload.email || '',
        password:payload.password || ''
      }
    }).subscribe({
      next:(response)=>{
        if(response.length){

          const authUser= response[0]

          
          this.store.dispatch(AuthActions.setAuthUser({data: authUser}))
          this.router.navigate(['/dashboard'])
          localStorage.setItem('token', authUser.token)
        }else{
          alert('No identificado')
          
        }
      }
    })
  }

  logout():void{
    this.store.dispatch(AuthActions.setAuthUser({data:null}))
  }

}