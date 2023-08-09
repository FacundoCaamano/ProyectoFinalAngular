import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}
  logout(): void {
    this.router.navigate(['login'])
    localStorage.setItem('token','')
  }
}
