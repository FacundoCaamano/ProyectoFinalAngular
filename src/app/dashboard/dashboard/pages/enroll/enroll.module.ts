import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollComponent } from './enroll/enroll.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionEffects } from './enroll/store/inscription.effects';
import { StoreModule } from '@ngrx/store';
import { inscriptionFeature } from './enroll/store/inscription.reducer';
import { EnrollDialogComponent } from './enroll/components/enroll-dialog/enroll-dialog.component';





@NgModule({
  declarations: [
    EnrollComponent,
    EnrollDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(inscriptionFeature),
    EffectsModule.forFeature([InscriptionEffects])
  ]
})
export class EnrollModule { }
