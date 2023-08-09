import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { CoursesComponent } from "./dashboard/dashboard/pages/courses/courses/courses.component";
import { TeachersComponent } from "./dashboard/dashboard/pages/teachers/teachers/teachers.component";
import { UsersComponent } from "./dashboard/dashboard/pages/users/users/users.component";
import { UsersDetailComponent } from "./dashboard/dashboard/pages/users/users/pages/users-detail/users-detail.component";
import { LoginComponent } from "./auth/auth/pages/login/login.component";


const routes:Routes=[
    {
       path: 'dashboard',
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