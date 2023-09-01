import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from './store/inscriptions.actions';
import { Observable } from 'rxjs';
import { Inscription } from './models';
import { selectInscriptionsArray } from './store/inscriptions.selectors';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {

  inscriptions$:Observable<Array<Inscription>>
  
  
  displayedColumns=['id','name','actions']
  constructor(private store:Store){
    this.inscriptions$ = this.store.select(selectInscriptionsArray)
  }

  ngOnInit(): void {
    this.store.dispatch(InscriptionsActions.loadInscriptions())
  }

}
  