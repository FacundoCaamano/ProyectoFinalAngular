import { TestBed } from "@angular/core/testing";
import{HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "./auth.service";
import { Users } from "src/app/dashboard/dashboard/pages/users/users/models";
import { Router } from "@angular/router";
import { RouterMock } from "src/app/core/mocks/router.mocks";

describe('AuthService',() =>{

    let service:AuthService
    let httpControler:HttpTestingController
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, RouterTestingModule],
            providers:[{

                provide:Router,
                useClass: RouterMock
            }
            ]
        });

        service = TestBed.inject(AuthService)
        httpControler = TestBed.inject(HttpTestingController)
    })

    it('si el login es valido el observable authUser$ debe emitir un valor',()=>{

        const mockUser:Users= {
            id:1232323232323,
            name:'test',
            surname:'test',
            email:'test@email.com',
            password:'test',
            courses:'test',
            token:'12345678912345678912'
        }
        const mockResponse:Array<Users>=[mockUser]

        service.login({
            email:mockUser.email,
            password:mockUser.password

        })

        httpControler.expectOne({
            method:'GET',
            url:'http://localhost:3000/users?email=test@email.com&password=test'
        }).flush(mockResponse)

        service.authUser$.subscribe({
            next:(authUser)=>{

                expect(authUser).toBeTruthy()
                expect(authUser).toEqual(mockUser)
            }
            })
    })
})