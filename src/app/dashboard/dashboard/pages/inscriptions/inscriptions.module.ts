import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionsEffects } from './inscriptions/store/inscriptions.effects';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { StoreModule } from '@ngrx/store';
import { inscriptionsFeature } from './inscriptions/store/inscriptions.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscriptionsDetailComponent } from './inscriptions/pages/inscriptions-detail/inscriptions-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionsDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature(inscriptionsFeature),
    EffectsModule.forFeature([InscriptionsEffects])
  ]
})
export class InscriptionsModule { }
