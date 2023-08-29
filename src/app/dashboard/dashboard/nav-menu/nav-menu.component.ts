import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth/service/auth.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authservice:AuthService){}
  logout(): void {
    this.authservice.logout()
    this.router.navigate(['login'],{})
    localStorage.setItem('token','')
  }
}
