import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsFormDialogComponent } from './students/components/students-form-dialog/students-form-dialog.component';
import { StudentsTableComponent } from './students/components/students-table/students-table.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormDialogComponent,
    StudentsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSelectModule
  ],
  exports:[
    StudentsComponent,
    StudentsFormDialogComponent
  ]
})
export class StudentsModule { }
