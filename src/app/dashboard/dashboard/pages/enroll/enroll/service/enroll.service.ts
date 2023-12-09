import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscription, InscriptionStudentCourse, enroll } from '../models';
import { environment } from 'environmentProd';
import { Student } from '../../../students/students/models';
import { Courses } from '../../../courses/courses/models';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private httpClient :HttpClient) { }

  getInscriptionFromDb():Observable<Array<InscriptionStudentCourse>>{
    return this.httpClient.get<Array<InscriptionStudentCourse>>(environment.API_URL + '/inscription?_expand=student&_expand=course')
  }

  getStudentsOptions():Observable<Array<Student>>{
    return this.httpClient.get<Array<Student>>(environment.API_URL + '/students')
  }

  getCoursesOptions():Observable<Array<Courses>>{
    return this.httpClient.get<Array<Courses>>(environment.API_URL + '/courses')
  }

  createEnroll(payload:enroll):Observable<Inscription>{
    return this.httpClient.post<Inscription>(environment.API_URL + '/inscription', payload)
  }
}
