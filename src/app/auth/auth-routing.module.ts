import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/pages/login/login.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      },
      
    ])
  ]
})
export class AuthRoutingModule {}
