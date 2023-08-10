import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoursesComponent } from "./dashboard/pages/courses/courses/courses.component";
import { TeachersComponent } from "./dashboard/pages/teachers/teachers/teachers.component";
import { UsersComponent } from "./dashboard/pages/users/users/users.component";
import { UsersDetailComponent } from "./dashboard/pages/users/users/pages/users-detail/users-detail.component";


@NgModule({
    imports:[
        RouterModule.forChild([
            {
                        path:'courses',
                        component:CoursesComponent
                    },
                    {
                        path:'teachers',
                        component:TeachersComponent
                    },
                    {
                        path:'users',
                        component:UsersComponent,
                        
                    },
                    {
                        path:'users/:id',
                        component: UsersDetailComponent
                    },
        ])
    ],
    exports:[RouterModule]
})

export class DashboardRoutingMoudle{}
