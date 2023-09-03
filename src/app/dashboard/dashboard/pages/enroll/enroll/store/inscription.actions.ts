import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscription, InscriptionStudentCourse, enroll } from '../models';
import { Student } from '../../../students/students/models';
import { HttpErrorResponse } from '@angular/common/http';
import { Courses } from '../../../courses/courses/models';

export const InscriptionActions = createActionGroup({
  source: 'Inscription',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: Array<InscriptionStudentCourse> }>(),
    'Load Inscriptions Failure': props<{ error: HttpErrorResponse }>(),

    'Load Students Options': emptyProps(),
    'Load Students Options Success': props<{data:Array<Student>}>(),
    'Load Students Option Failure': props<{ error: HttpErrorResponse }>(),

    'Load Course Options': emptyProps(),
    'Load Course Options Success': props<{data:Array<Courses>}>(),
    'Load Course Option Failure': props<{ error: HttpErrorResponse }>(),

    'enroll' : props<{payload: enroll}>(),
    'enroll success': props<{ data: Inscription}>(),
    'enroll failure': props<{error: HttpErrorResponse}>()
  }
});
