import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesTableComponent } from './courses/components/courses-table/courses-table.component';
import { CoursesFormDialogComponent } from './courses/components/courses-form-dialog/courses-form-dialog.component';
import { CourseDetailComponent } from './courses/pages/course-detail/course-detail.component';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent,
    CoursesFormDialogComponent,
    CourseDetailComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    CoursesComponent,
    CoursesFormDialogComponent,
  ]
})
export class CoursesModule { }
