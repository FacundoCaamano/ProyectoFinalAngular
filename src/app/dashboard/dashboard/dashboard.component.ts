import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
})
export class DashboardComponent {
  showFiller = false;
  mode = new FormControl('over' as MatDrawerMode);
}
