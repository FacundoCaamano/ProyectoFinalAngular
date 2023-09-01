import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../../students/students/service/studnets.service';
import { Inscription } from '../../models';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from '../../store/inscriptions.actions';
import { Observable } from 'rxjs';
import { selectInscriptioName } from '../../store/inscriptions.selectors';

@Component({
  selector: 'app-inscriptions-detail',
  templateUrl: './inscriptions-detail.component.html',
  styleUrls: ['./inscriptions-detail.component.scss']
})
export class InscriptionsDetailComponent implements OnInit {
  displayedColumns=['id','name','student']
  inscription: Array<Inscription>=[]
  inscriptionName$:Observable<string | undefined>

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService:StudentService,
    private store:Store
    ) {
      this.inscriptionName$ = this.store.select(selectInscriptioName)
    }
  ngOnInit(): void {

    this.store.dispatch(InscriptionsActions.loadInscriptionsDetail({inscriptioName :this.activatedRoute.snapshot.params['name'] }))

    this.studentService.getInscriptionStudent(this.activatedRoute.snapshot.params['name']).subscribe({
      next: (student) => this.inscription=student
      
      
    })
  }

}
