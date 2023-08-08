import { Component } from '@angular/core';
import { TeachersService } from './service/teachers.service';
import { MatDialog } from '@angular/material/dialog';
import { Teachers } from './models';
import { Observable } from 'rxjs';
import { TeacherFormDialogComponent } from './components/teacher-form-dialog/teacher-form-dialog.component';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {

  public teacher:Observable<Array<Teachers>>

  constructor(
    private teacherService:TeachersService,
    private matDialog: MatDialog
  ){
    this.teacherService.loadTeacher()
    this.teacher = this.teacherService.getTeacher()
  }

  onCreateTeacher(){
    const dialogRef = this.matDialog.open(TeacherFormDialogComponent)

    dialogRef.afterClosed().subscribe({
      next:(v)=>{
        if(v){
          this.teacherService.createTeacher({
            id:new Date().getTime(),
            name:v.name,
            surname:v.surname,
            course:v.course,
          })
        }
      }
    })
  }

  onDeleteTeacher(deleteTeacher:Teachers){
    if(confirm(`¿Está seguro de eliminar a ${deleteTeacher.name}?`)){
      this.teacherService.deleteTeacher(deleteTeacher.id)
    }
  }

  onEditTeacher(teacherEdit:Teachers){
    const dialogRef = this.matDialog

    dialogRef.open(TeacherFormDialogComponent,{
      data:teacherEdit
    })
    .afterClosed()
    .subscribe({
      next: teacherUpdated =>{
        this.teacherService.updateTeacher(teacherEdit.id, teacherUpdated)
      }
    })
  }
}
