import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionActions } from './inscription.actions';
import { InscriptionStudentCourse } from '../models';
import { Student } from '../../../students/students/models';
import { Courses } from '../../../courses/courses/models';

export const inscriptionFeatureKey = 'inscription';

export interface State {
  data: Array<InscriptionStudentCourse>,
  studentsOptions:Array<Student>,
  coursesOptions:Array<Courses>,
  loading:boolean,
  error:unknown,
}

export const initialState: State = {
  data:[],
  loading:false,
  error:null,
  studentsOptions:[],
  coursesOptions:[],
};

export const reducer = createReducer(
  initialState,

  on(InscriptionActions.loadInscriptions, state => {
    return{
      ...state,
      loading:true
    }
  }),

  on(InscriptionActions.loadInscriptionsSuccess, (state, action) => {
    return {
      ...state,
      data:action.data, 
      loading:false,
      
    }
  }),

  on(InscriptionActions.loadInscriptionsFailure, (state, action) => {
    return{
      ...state,
      error:action.error,
      loading:false
    }}),

  on(InscriptionActions.loadStudentsOptions,(state)=>state),
  on(InscriptionActions.loadStudentsOptionsSuccess,(state, action)=> {
    return {
      ...state,
      studentsOptions:action.data
    }
  }) ,
  
  on(InscriptionActions.loadCourseOptions,(state)=>state),
  on(InscriptionActions.loadCourseOptionsSuccess,(state, action)=> {
    return {
      ...state,
      coursesOptions :action.data
    }
  })  
);

export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});

