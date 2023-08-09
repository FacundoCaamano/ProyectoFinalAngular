import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDalogComponent } from './components/user-form-dalog/user-form-dalog.component';
import { Observable } from 'rxjs';
import { Users } from './models';
import { UserService } from './service/user.service';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: Observable<Users[]>

  constructor(
    private matDialog: MatDialog,
    private usersService: UserService
  ){
    this.usersService.loadUser()
    this.users = this.usersService.getUsers()
  }
  
  onCreateUser():void{
    const dialogRef = this.matDialog.open(UserFormDalogComponent); 

    dialogRef.afterClosed().subscribe({ 
      next: (v)=>{
        if(v){
          this.usersService.createUser({
            id: new Date().getTime(),
            name: v.name,
            surname: v.surname,
            courses: v.courses,
            email: v.email,
            password:v.password,
            token:""
          })
          
        }
        
      }
    })
  }

  onDeleteUser(userToDelete:Users): void{
    if(confirm(`¿Está seguro de eliminar a ${userToDelete.name}?`)){
      this.usersService.deleteById(userToDelete.id)
    }
  }

  onEditUser(userToEdit:Users){
    const dialogRef = this.matDialog

    .open(UserFormDalogComponent, {
      data: userToEdit
    }) 

    .afterClosed()
    
    .subscribe({
      next: (userUpdated)=>{
          this.usersService.updateById(userToEdit.id, userUpdated)
      }
    })
    
  }
}
