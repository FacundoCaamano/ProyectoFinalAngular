import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscriptions from './inscriptions.reducer';

export const selectInscriptionsState = createFeatureSelector<fromInscriptions.State>(
  fromInscriptions.inscriptionsFeatureKey
);


export const selectInscriptionsArray = createSelector(selectInscriptionsState,(state) => state.data)

export const selectInscriptioName = createSelector(selectInscriptionsState, (state) => state.dataDetail?.name )