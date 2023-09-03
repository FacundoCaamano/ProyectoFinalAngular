import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscriptionActions } from './store/inscription.actions';
import { Observable } from 'rxjs';
import { InscriptionStudentCourse } from './models';
import { selectInscription } from './store/inscription.selectors';
import { MatDialog } from '@angular/material/dialog';
import { EnrollDialogComponent } from './components/enroll-dialog/enroll-dialog.component';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  displayedColumns = ['id','course','student']
  inscription$:Observable<Array<InscriptionStudentCourse>>

  constructor(private store:Store, private matDialog: MatDialog){
    this.inscription$ = this.store.select(selectInscription)
  }

  onAdd():void {
    this.matDialog.open(EnrollDialogComponent)
  }

  ngOnInit(): void {
    this.store.dispatch(InscriptionActions.loadInscriptions())
  }
}
