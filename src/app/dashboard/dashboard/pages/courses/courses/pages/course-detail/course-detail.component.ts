import { Component } from '@angular/core';
import { Courses } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../service/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  public course : Courses | null = null
  public courseId?: number

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private courseService:CourseService
  ){
    if(!Number(this.activatedRoute.snapshot.params['id'])){
      this.router.navigate(['dashboard','[course]'])
      
    }else{
      this.courseId= Number(this.activatedRoute.snapshot.params['id'])
      this.loadCourse()     
    }
  }
  loadCourse():void{
    if(this.courseId){
      this.courseService.getById(this.courseId).subscribe({ 
        next:(course)=> this.course = course || null,
      }
      )
    }
  }
}
