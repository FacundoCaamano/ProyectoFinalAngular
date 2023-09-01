import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionsActions } from './inscriptions.actions';
import { Inscription } from '../models';
import { inscriptions_mocks } from '../mocks';

export const inscriptionsFeatureKey = 'inscriptions';

export interface State {
  data:Array<Inscription>,
  dataDetail:Inscription | null 
}

export const initialState: State = {
  data: [],
  dataDetail: null
};

export const reducer = createReducer(
  initialState,
  on(InscriptionsActions.loadInscriptions, state => {
    return {
      ...state,
      data: inscriptions_mocks

    }
  }),

  on(InscriptionsActions.loadInscriptionsDetail,(state, actions )=>{
    return{
      ...state,
      dataDetail: inscriptions_mocks.find((i) => i.name === actions.inscriptioName ) || null
    }
  })

);

export const inscriptionsFeature = createFeature({
  name: inscriptionsFeatureKey,
  reducer,
});

