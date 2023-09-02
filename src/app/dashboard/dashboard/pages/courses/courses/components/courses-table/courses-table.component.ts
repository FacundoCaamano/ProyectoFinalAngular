import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from '../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAdmin } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {
  displayedColumns: String[] = ['id','name','duration','teacher','actions']
  public isAdmin:Observable<boolean>

  @Input()dataSource: Array<Courses> = [];

  @Output()
  deleteCourse = new EventEmitter<Courses>()

  @Output()
  editCourse = new EventEmitter<Courses>()
  constructor( private store:Store){
    this.isAdmin=store.select(selectAdmin)
  }
}
