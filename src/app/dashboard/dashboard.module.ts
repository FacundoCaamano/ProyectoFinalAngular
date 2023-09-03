import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './dashboard/pages/users/users.module';
import { CoursesModule } from './dashboard/pages/courses/courses.module';
import { TeachersModule } from './dashboard/pages/teachers/teachers.module';
import { NavMenuComponent } from './dashboard/nav-menu/nav-menu.component';
import { DashboardRoutingMoudle } from './dashboard-routing.module';
import { StudentsModule } from './dashboard/pages/students/students.module';
import { InscriptionsModule } from './dashboard/pages/inscriptions/inscriptions.module';
import { EnrollModule } from './dashboard/pages/enroll/enroll.module';







@NgModule({
  declarations: [
    DashboardComponent,
    NavMenuComponent,

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    SharedModule,
    UsersModule,
    CoursesModule,
    TeachersModule,
    StudentsModule,
    InscriptionsModule,
    EnrollModule,
    DashboardRoutingMoudle
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
