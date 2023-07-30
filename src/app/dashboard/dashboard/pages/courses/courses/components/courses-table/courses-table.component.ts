import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from '../../models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {
  displayedColumns: String[] = ['id','name','duration','teacher','actions']

  @Input()dataSource: Array<Courses> = [];

  @Output()
  deleteCourse = new EventEmitter<Courses>()

  @Output()
  editCourse = new EventEmitter<Courses>()
}
