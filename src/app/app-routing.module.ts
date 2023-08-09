import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { LoginComponent } from "./auth/auth/pages/login/login.component";
import { authGuard } from "./core/guards/auth.guard";


const routes:Routes=[
    {
       path: 'dashboard',
       canActivate:[authGuard],
       component: DashboardComponent,
       loadChildren:() => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
    },
    {
        path:'login',
        component: LoginComponent,
        loadChildren:() => import('./auth/auth.module').then((m)=> m.AuthModule)
    },
    {
        path:'**',
        redirectTo:'/dashboard'
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}