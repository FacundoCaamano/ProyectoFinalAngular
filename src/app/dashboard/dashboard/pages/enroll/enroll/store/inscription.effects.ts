import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, take } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscriptionActions } from './inscription.actions';
import { EnrollService } from '../service/enroll.service';
import { StudentService } from '../../../students/students/service/studnets.service';
import { Student } from '../../../students/students/models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/config/environment';


@Injectable()
export class InscriptionEffects {

  constructor(
    private actions$: Actions ,
    private enrollService:EnrollService,
    private httpClient:HttpClient
    ) {}

  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.loadInscriptions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.enrollService.getInscriptionFromDb().pipe(
          map(data => InscriptionActions.loadInscriptionsSuccess({ data })),
          catchError(error => of(InscriptionActions.loadInscriptionsFailure({ error }))))
      )
    );
  });

  loadStudentsOpctions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.loadInscriptions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.enrollService.getStudentsOptions().pipe(
          map(data => InscriptionActions.loadStudentsOptionsSuccess({ data })),
          catchError(error => of(InscriptionActions.loadStudentsOptionFailure({ error }))))
      )
    );
  });

  loadCoursesOptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.loadInscriptions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.enrollService.getCoursesOptions().pipe(
          map(data => InscriptionActions.loadCourseOptionsSuccess({ data })),
          catchError(error => of(InscriptionActions.loadCourseOptionFailure({ error }))))
      )
    );
  });



 

    
}
