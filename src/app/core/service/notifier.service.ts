import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  
 
  constructor(private snackBar: MatSnackBar) { }

  showNotification(message: string, action: string = 'Cerrar', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }
}
