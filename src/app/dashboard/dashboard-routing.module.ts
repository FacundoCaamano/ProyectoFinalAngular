import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoursesComponent } from "./dashboard/pages/courses/courses/courses.component";
import { TeachersComponent } from "./dashboard/pages/teachers/teachers/teachers.component";
import { UsersComponent } from "./dashboard/pages/users/users/users.component";
import { UsersDetailComponent } from "./dashboard/pages/users/users/pages/users-detail/users-detail.component";
import { StudentsComponent } from "./dashboard/pages/students/students/students.component";
import { InscriptionsComponent } from "./dashboard/pages/inscriptions/inscriptions/inscriptions.component";
import { InscriptionsDetailComponent } from "./dashboard/pages/inscriptions/inscriptions/pages/inscriptions-detail/inscriptions-detail.component";
import { adminGuard } from "../core/guards/admin.guard";
import { EnrollComponent } from "./dashboard/pages/enroll/enroll/enroll.component";
import { HomeComponent } from "./dashboard/home/home.component";


@NgModule({
    imports:[
        RouterModule.forChild([
                    {
                        path:'',
                        component:HomeComponent
                    },
                    {
                        path:'courses',
                        component:CoursesComponent
                    },
                    {
                        path:'teachers',
                        component:TeachersComponent
                    },
                    {
                        path:'inscriptions',
                        component:InscriptionsComponent
                    },
                    {
                        path:'inscriptions/:name',
                        component:InscriptionsDetailComponent
                    },
                    {
                        path:'enroll',
                        component:EnrollComponent
                    },
                    {
                        path:'students',
                        component:StudentsComponent
                    },
                    {
                        path:'users',
                        canActivate:[adminGuard],
                        component:UsersComponent,
                        
                    },
                    {
                        path:'users/:id',
                        canActivate:[adminGuard],
                        component: UsersDetailComponent
                    },
        ])
    ],
    exports:[RouterModule]
})

export class DashboardRoutingMoudle{}

