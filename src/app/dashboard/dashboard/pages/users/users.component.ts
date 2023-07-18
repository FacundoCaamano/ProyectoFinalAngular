import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDalogComponent } from './components/user-form-dalog/user-form-dalog.component';
import { Users } from './models';


const ELEMENT_DATA: Users[] = [
  {
    id:1,
    name: 'Lucas',
    surname:'Spagnoli',
    courses:'Angular',
    email:'Lucas123@yahoo.com',
    password:'123',
  }
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: Users[]=ELEMENT_DATA
  constructor(
    private matDialog: MatDialog
  ){}
  
  onCreateUser():void{
    const dialogRef = this.matDialog.open(UserFormDalogComponent); 

    dialogRef.afterClosed().subscribe({ 
      next: (v)=>{
        if(v){

          this.users = [
            ...this.users,
            {
                id: this.users.length + 1,
                name: v.name,
                surname: v.surname,
                courses:v.courses,
                email: v.email,
                password: v.password
            }
          ]
           
        }else{

        }
        
      }
    })
  }

  onDeleteUser(userToDelete:Users): void{
    if(confirm(`eliminar ${userToDelete.name}`)){
      this.users= this.users.filter((u)=> u.id !== userToDelete.id)
    }
  }

  onEditUser(userToEdit:Users){
    const dialogRef = this.matDialog

    .open(UserFormDalogComponent, {
      data: userToEdit
    }) 

    .afterClosed()
    
    .subscribe({
      next: (v)=>{
        if(v){
          this.users = this.users.map(user =>{
            
            return user.id === userToEdit.id 
            ? {...user, ...v}
            : user
          })
        }
        
        
      }
    })
    
  }
}
