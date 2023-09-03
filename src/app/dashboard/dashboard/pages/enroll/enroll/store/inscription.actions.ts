import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { InscriptionStudentCourse } from '../models';

export const InscriptionActions = createActionGroup({
  source: 'Inscription',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: InscriptionStudentCourse[] }>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
  }
});
