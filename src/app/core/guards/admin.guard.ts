import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectAdmin } from 'src/app/store/auth/auth.selectors';

export const adminGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  return inject(Store).select(selectAdmin).pipe(
    map((isAdmin$)=>{
      if(!isAdmin$){
        return router.createUrlTree(['/dashboard'])
      }else{
        return true
      }
    })
  )
};
