import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureKeys } from "./auth.reducer";

export const selectAuthState= createFeatureSelector<AuthState>(authFeatureKeys)

export const selectAuthUser = createSelector(selectAuthState,(state)=>state.authUser)

export const selectAuthUserRol = createSelector(selectAuthState,(state) => state.authUser?.role)

export const selectAdmin = createSelector(selectAuthState,(state)=> state.authUser?.role === 'ADMIN')