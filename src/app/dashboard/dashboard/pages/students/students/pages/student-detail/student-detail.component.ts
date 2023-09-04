import { Component } from '@angular/core';
import { Student } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../service/studnets.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {

  public student : Student | null = null
  public studentId?: number

  constructor(private activatedRoute: ActivatedRoute,
     private router:Router,
     private studentService:StudentService
     ){

    if(!Number(this.activatedRoute.snapshot.params['id'])){
      this.router.navigate(['dashboard','[students]'])
      
    }else{
      this.studentId= Number(this.activatedRoute.snapshot.params['id'])
      this.loadStudent()     
    }
  }
  loadStudent():void{
    if(this.studentId){
      this.studentService.getById(this.studentId).subscribe({ 
        next:(student)=> this.student = student || null,
      }
      )
    }
  }
}
