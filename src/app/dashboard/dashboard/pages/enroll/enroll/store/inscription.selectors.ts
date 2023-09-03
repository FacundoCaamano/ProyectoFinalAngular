import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscription from './inscription.reducer';

export const selectInscriptionState = createFeatureSelector<fromInscription.State>(
  fromInscription.inscriptionFeatureKey
);


export const selectInscription = createSelector(selectInscriptionState, (state)=>state.data)

export const selectStudentsOptions = createSelector(selectInscriptionState, (state) => state.studentsOptions)

export const selectCourseOptions = createSelector(selectInscriptionState, (state) => state.coursesOptions)