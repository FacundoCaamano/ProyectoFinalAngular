import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDrawer, MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth/service/auth.service';
import { Users } from './pages/users/users/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
})
export class DashboardComponent {
  showFiller = false;
  mode = new FormControl('over' as MatDrawerMode);

  @Input()
  public drawer?: MatDrawer;


  public authUser$: Observable<Users | null>;

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }
}
