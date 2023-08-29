import { createActionGroup, props } from "@ngrx/store";
import { Users } from "src/app/dashboard/dashboard/pages/users/users/models";

export const AuthActions = createActionGroup({
    source:'Auth',
    events:{
        'setAuthUser': props<{data:Users | null}>()
    }
})