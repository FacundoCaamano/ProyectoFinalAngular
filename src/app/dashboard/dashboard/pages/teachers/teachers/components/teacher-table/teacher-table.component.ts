import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teachers } from '../../models';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.scss']
})
export class TeacherTableComponent {

  displayedColumns:Array<string>=['id','name','surname','course','actions']

  @Input() dataSource:Array<Teachers> =[]
  
  @Output() deleteTeacher = new EventEmitter<Teachers>()

  @Output() editTeacher = new EventEmitter<Teachers>()
}
