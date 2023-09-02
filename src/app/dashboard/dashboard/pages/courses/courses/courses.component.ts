import { Component, Input } from '@angular/core';
import { Courses } from './models';
import { Observable } from 'rxjs';
import { CourseService } from './service/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { CoursesFormDialogComponent } from './components/courses-form-dialog/courses-form-dialog.component';
import { Store } from '@ngrx/store';
import { selectAdmin } from 'src/app/store/auth/auth.selectors';

const idRandom = Math.random() * 100
const idCourse=Math.round(idRandom)

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  public courses: Observable<Array<Courses>>
  public isAdmin:Observable<boolean>
  
  constructor(
    private coursesService: CourseService,
    private matDialog: MatDialog,
    private store:Store
  ){
    this.coursesService.loadCourses()
    this.courses = this.coursesService.getCourses()
    this.isAdmin=store.select(selectAdmin)
    
  }

  onCreateCourse():void{
    const dialogRef = this.matDialog.open(CoursesFormDialogComponent)

    dialogRef.afterClosed().subscribe({
      next: (v)=>{
        if(v){
          this.coursesService.createCourse({
            id: idCourse,
            name: v.name,
            duration: v.duration,
            teacher :v.teacher
          })
        }
      }
    })
  }
  
  onDeleteCourse(courseToDelete:Courses): void{
    if(confirm(`¿Está seguro de eliminar a ${courseToDelete.name}?`)){
      this.coursesService.deleteById(courseToDelete.id)
    }
  }
  onEditCourse(courseToEdit:Courses){
    const dialoRef = this.matDialog
    .open(CoursesFormDialogComponent,{
      data:courseToEdit
    })
    .afterClosed()
  
    .subscribe({
     next:(courseUpdated)=>{
      if(courseUpdated){

        this.coursesService.updateById(courseToEdit.id,courseUpdated)
      }
     }
    })
  }
}
