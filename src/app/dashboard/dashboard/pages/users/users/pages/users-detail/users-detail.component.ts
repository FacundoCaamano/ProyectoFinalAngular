import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Users } from '../../models';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent {
  public user : Users | null = null
  public userId?: number
  constructor(private activatedRoute: ActivatedRoute, private router:Router, private userService: UserService ){
    if(!Number(this.activatedRoute.snapshot.params['id'])){
      this.router.navigate(['dashboard','[users]'])
      
    }else{
      this.userId= Number(this.activatedRoute.snapshot.params['id'])
      this.loadUser()
    }
    
  }
  loadUser():void{
    if(this.userId){
      this.userService.getById(this.userId).subscribe({ 
        next:(user)=> this.user = user || null,
      }
      )
    }
  }
}
