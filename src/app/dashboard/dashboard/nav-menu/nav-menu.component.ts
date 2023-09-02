import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth/service/auth.service';
import { selectAdmin, selectAuthUserRol } from 'src/app/store/auth/auth.selectors';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  public selectAdmin$:Observable<boolean>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authservice:AuthService, private store:Store){
    this.selectAdmin$= this.store.select(selectAdmin)
  }
  logout(): void {
    this.authservice.logout()
    this.router.navigate(['login'],{})
    localStorage.setItem('token','')
  }
}
