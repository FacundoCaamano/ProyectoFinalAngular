import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const InscriptionsActions = createActionGroup({
  source: 'Inscriptions',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions detail':props<{inscriptioName:string}>()
    
  }
});
