import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { FullNamePipe } from './pipes/full-name.pipe';
import { ControlErrorMessagePipe } from './pipes/control-error-message.pipe';
import { FonTitleDirective } from './directives/fon-title.directive';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    FullNamePipe,
    ControlErrorMessagePipe,
    FonTitleDirective,
    
  ],
  imports: [
    CommonModule,
  ],
  exports:[
   MatCardModule,
   MatButtonModule,
   MatIconModule,
   ReactiveFormsModule,
   MatFormFieldModule,
   MatDialogModule,
   MatInputModule,
   MatTableModule,
   FullNamePipe,
   MatSelectModule,
   ControlErrorMessagePipe,
   FonTitleDirective,
   MatSelectModule
  ]
})
export class SharedModule { }
