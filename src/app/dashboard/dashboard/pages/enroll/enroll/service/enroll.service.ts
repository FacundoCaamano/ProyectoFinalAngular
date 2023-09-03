import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscriptionStudentCourse } from '../models';
import { environment } from 'src/config/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private httpClient :HttpClient) { }

  getInscriptionFromDb():Observable<Array<InscriptionStudentCourse>>{
    return this.httpClient.get<Array<InscriptionStudentCourse>>(environment.API_URL + '/inscription?_expand=student&_expand=course')
  }
}
