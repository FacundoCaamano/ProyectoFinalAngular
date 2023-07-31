import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers/teachers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherFormDialogComponent } from './teachers/components/teacher-form-dialog/teacher-form-dialog.component';
import { TeacherTableComponent } from './teachers/components/teacher-table/teacher-table.component';




@NgModule({
  declarations: [
    TeachersComponent,
    TeacherFormDialogComponent,
    TeacherTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    TeachersComponent
  ]
})
export class TeachersModule { }
