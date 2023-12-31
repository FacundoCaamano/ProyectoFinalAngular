import { Component } from '@angular/core';
import { Student } from './models';
import { Observable } from 'rxjs';
import { StudentService } from './service/studnets.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentsFormDialogComponent } from './components/students-form-dialog/students-form-dialog.component';
import { NotifierService } from 'src/app/core/service/notifier.service';


const idRandom = Math.random() * 100
const idStudent=Math.round(idRandom)


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  public students: Observable<Array<Student>>
  

  constructor(
    private studentsService: StudentService,
    private matDialog: MatDialog,
    private notificationService: NotifierService
  ){
    this.studentsService.loadStudents()
    this.students = this.studentsService.getStudents()
    
  }
  

  onCreateStudent():void{
    const dialogRef = this.matDialog.open(StudentsFormDialogComponent)

    dialogRef.afterClosed().subscribe({
      next: (v)=>{
        if(v){
          this.studentsService.createStudent({
            id: idStudent,
            name: v.name,
            surname:v.surname,
            course: v.course,
            email:v.email
          })
        }
        
      }
    })
  }

  
  onDeleteStudent(studentToDelete:Student): void{
    if(confirm(`¿Está seguro de eliminar a ${studentToDelete.name}?`)){
      this.studentsService.deleteById(studentToDelete.id)
    }
    this.notificationService.showNotification('student eliminated!');
  }
  onEditStudent(studentToEdit:Student){
    const dialoRef = this.matDialog
    .open(StudentsFormDialogComponent,{
      data:studentToEdit
    })
    .afterClosed()
  
    .subscribe({
     next:(studentUpdated)=>{
      if(studentUpdated){

        this.studentsService.updateById(studentToEdit.id,studentUpdated)
      }
     }
    })
  }
}
