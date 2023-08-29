import { createReducer, on } from "@ngrx/store"
import { Users } from "src/app/dashboard/dashboard/pages/users/users/models"
import { AuthActions } from "./auth.actions"

export const authFeatureKeys = 'auth'
export interface AuthState{
    authUser: Users | null
}

const initialState:AuthState = {
    authUser: null
}

export const authReducer = createReducer(initialState,
     on(AuthActions.setAuthUser,
        (currentState, actions)=>{
            return{
                authUser: actions.data
            }
}
))