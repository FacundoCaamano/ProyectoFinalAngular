import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDalogComponent } from './components/user-form-dalog/user-form-dalog.component';
import { Observable } from 'rxjs';
import { Users } from './models';
import { UserService } from './service/user.service';
import { NotifierService } from 'src/app/core/service/notifier.service';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: Observable<Users[]>

  constructor(
    private matDialog: MatDialog,
    private usersService: UserService,
    private notificationService:NotifierService
  ){
    this.usersService.loadUser()
    this.users = this.usersService.getUsers()
  }
  
  onCreateUser():void{    
    this.matDialog.open(UserFormDalogComponent)

    .afterClosed().subscribe({ 
      next: (v)=>{
        if(v){
          this.usersService.createUser({
            name: v.name,
            surname: v.surname,
            email: v.email,
            password:v.password,
            role:v.role
          })
          
        }
        
      }
    })
  }

  onDeleteUser(userToDelete:Users): void{
    if(confirm(`¿Está seguro de eliminar a ${userToDelete.name}?`)){
      this.usersService.deleteById(userToDelete.id)
    }
    this.notificationService.showNotification('User eliminated!');
  }

  onEditUser(userToEdit:Users){
    const dialogRef = this.matDialog

    .open(UserFormDalogComponent, {
      data: userToEdit
    }) 

    .afterClosed()
    
    .subscribe({
      next: (userUpdated)=>{
        if(userUpdated){

          this.usersService.updateById(userToEdit.id, userUpdated)
        }
      }
    })
    
  }
}
