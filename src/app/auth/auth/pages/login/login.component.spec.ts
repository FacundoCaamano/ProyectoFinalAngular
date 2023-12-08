import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { MatCardModule } from "@angular/material/card"

describe('LoginComponent',()=>{

    let component:LoginComponent

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[LoginComponent],
            imports:[MatFormFieldModule,MatInputModule,HttpClientTestingModule,MatCardModule]
        })

        component=TestBed.createComponent(LoginComponent).componentInstance
    })
        it('Debe ser invalido el formulario si los campos estan vacios',()=>{
            component.emailControl.setValue(''),
            

            expect(component.loginForm.invalid).toBe(true)
        })
    })

