import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsFormDialogComponent } from './students/components/students-form-dialog/students-form-dialog.component';
import { StudentsTableComponent } from './students/components/students-table/students-table.component';
import {MatSelectModule} from '@angular/material/select';
import { StudentDetailComponent } from './students/pages/student-detail/student-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormDialogComponent,
    StudentsTableComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSelectModule,
    RouterModule
  ],
  exports:[
    StudentsComponent,
    StudentsFormDialogComponent
  ]
})
export class StudentsModule { }
