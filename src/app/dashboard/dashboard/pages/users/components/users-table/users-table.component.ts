import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Users } from '../../models';




@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  displayedColumns: string[] = ['id', 'fullname', 'email','courses','actions'];

  @Input()
  dataSource: Users[] = [];

  @Output()
  deleteUser = new EventEmitter<Users>()

  @Output()
  editUser = new EventEmitter<Users>()
  }
