import { Component } from '@angular/core';
import { Teachers } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from '../../service/teachers.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent {
  public teacher : Teachers | null = null
  public teacherId?: number
  constructor(   private activatedRoute: ActivatedRoute, private router:Router,private teacherService:TeachersService){

    if(!Number(this.activatedRoute.snapshot.params['id'])){
      this.router.navigate(['dashboard','[teachers]'])
      
    }else{
      this.teacherId= Number(this.activatedRoute.snapshot.params['id'])
      this.loadTeacher()     
    }
  }
  loadTeacher():void{
    if(this.teacherId){
      this.teacherService.getById(this.teacherId).subscribe({ 
        next:(teacher)=> this.teacher = teacher || null,
      }
      )
    }
  }
}
