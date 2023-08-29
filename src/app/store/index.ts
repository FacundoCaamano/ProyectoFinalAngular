import { ActionReducerMap } from "@ngrx/store";
import { AuthState, authFeatureKeys, authReducer } from "./auth/auth.reducer";

export interface AppState{
    [authFeatureKeys]:AuthState
}

export const appReducer:ActionReducerMap<any>={
    [authFeatureKeys]:authReducer
}