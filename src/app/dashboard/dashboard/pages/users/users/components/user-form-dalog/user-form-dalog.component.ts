import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Users } from '../../models';



@Component({
  selector: 'app-user-form-dalog',
  templateUrl: './user-form-dalog.component.html',
  styleUrls: ['./user-form-dalog.component.scss']
})
export class UserFormDalogComponent {
  editingUser?:Users
  nameControl = new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(2),
  ])

  surnameControl = new FormControl<string | null>(null, 
    Validators.required
    )

  coursesControl = new FormControl<string | null>(null,
    Validators.required
    )

  emailControl = new FormControl<string | null>(null, [
    Validators.email,
    Validators.required
  ])

  passwordControl = new FormControl<string | null>(null, [
    Validators.required
  ])

  roleControl = new FormControl<string | null>(null, [
    Validators.required
  ])

  usersForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    courses: this.coursesControl,
    email: this.emailControl,
    password: this.passwordControl,
    rol: this.roleControl

  })

  constructor(private diaLogRef: MatDialogRef<UserFormDalogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Users,
    ){
      if(this.data){
        this.editingUser = this.data
        this.nameControl.setValue(this.data.name)
        this.surnameControl.setValue(this.data.surname)
        this.emailControl.setValue(this.data.email)
        this.passwordControl.setValue(this.data.password)
        this.roleControl.setValue(this.data.role)
      }
      
  }

  onSubmit(): void {
    if(this.usersForm.invalid){
      this.usersForm.markAllAsTouched();
    }else{

      alert('Updated information')
      this.diaLogRef.close(this.usersForm.value)
    }
  } 
}
