import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './users/users.component';
import { UserFormDalogComponent } from './users/components/user-form-dalog/user-form-dalog.component';
import { UsersTableComponent } from './users/components/users-table/users-table.component';




@NgModule({
  declarations: [
    UsersComponent,
    UserFormDalogComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    UsersComponent,
    UserFormDalogComponent
  ]
})
export class UsersModule { }
