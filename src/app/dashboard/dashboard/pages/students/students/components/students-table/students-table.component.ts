import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';
@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {
  displayedColumns=['id','name','surname','email','course','actions']

  @Input()dataSource:Array<Student>=[]

  @Output() deleteStudent = new EventEmitter<Student>()

  @Output() editStudent = new EventEmitter<Student>()
}
