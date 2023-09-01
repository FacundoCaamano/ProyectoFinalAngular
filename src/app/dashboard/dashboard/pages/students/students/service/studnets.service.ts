import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, mergeMap, take } from "rxjs";
import { Student } from "../models";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/config/environment";
@Injectable({
    providedIn:"root"
})

export class StudentService{
    private _student$ = new BehaviorSubject<Array<Student>>([])
    private student$ = this._student$.asObservable()

    constructor(private httpClient:HttpClient){}

    loadStudents():void{
        this.httpClient.get<Array<Student>>(environment.API_URL + '/students').subscribe({
          next:(response) =>{
            this._student$.next(response)
          }
        })
      }

    getStudents():Observable<Array<Student>>{
        return this.student$
      }

    createStudent(student:Student){
        this.httpClient.post(environment.API_URL + '/students/', student)
        .pipe(
            mergeMap(
                (studentData)=> this._student$.pipe(
                    take(1),
                    map(
                        (arrayActual)=>[...arrayActual,student]
                    )))
            )
        .subscribe({
            next:(arrayActualizado)=>{
                this._student$.next(arrayActualizado)
            }
        })
    }

    updateById(id:number , studentUpdated:Student):void{
        this.httpClient.put(environment.API_URL+"/students/" + id,studentUpdated).subscribe({
            next:()=> this.loadStudents()
        })
    }

    deleteById(id:number):void{
        this.httpClient.delete(environment.API_URL + "/students/" + id)
        .pipe(
          mergeMap((responseStudentDelete)=>
            this._student$.pipe(take(1), map((arrayACtual) => arrayACtual.filter((c) => c.id !== id))
          )
        )
        ).subscribe({
          next:(arrayActualizado) => 
            this._student$.next(arrayActualizado)
        })
      }

    getInscriptionStudent(course:string):Observable<Array<Student>>{
      return this.httpClient.get<Array<Student>>(environment.API_URL + `/students?course=${course}`)
    }  

}