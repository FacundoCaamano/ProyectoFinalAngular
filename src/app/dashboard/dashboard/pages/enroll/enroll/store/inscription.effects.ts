import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, take } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscriptionActions } from './inscription.actions';
import { EnrollService } from '../service/enroll.service';
import { StudentService } from '../../../students/students/service/studnets.service';
import { Student } from '../../../students/students/models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';
import { Store } from '@ngrx/store';


@Injectable()
export class InscriptionEffects {

  constructor(
    private actions$: Actions ,
    private enrollService:EnrollService,
    private store:Store
    ) {}

  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.loadInscriptions),
      concatMap(() =>
 
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
   
        this.enrollService.getCoursesOptions().pipe(
          map(data => InscriptionActions.loadCourseOptionsSuccess({ data })),
          catchError(error => of(InscriptionActions.loadCourseOptionFailure({ error }))))
      )
    );
  });

  enroll$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.enroll),
      concatMap((action) =>
       
        this.enrollService.createEnroll(action.payload).pipe(
          map(data => InscriptionActions.enrollSuccess({ data })),
          catchError(error => of(InscriptionActions.enrollFailure({ error }))))
      )
    );
  });

  enrollSuccess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.enrollSuccess),
      map(()=>this.store.dispatch(InscriptionActions.loadInscriptions()))
     
    );
  } ,{dispatch:false});
 

    
}
