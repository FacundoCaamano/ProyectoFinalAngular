import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './dashboard/pages/users/users.module';
import { CoursesModule } from './dashboard/pages/courses/courses.module';






@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    SharedModule,
    UsersModule,
    CoursesModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
