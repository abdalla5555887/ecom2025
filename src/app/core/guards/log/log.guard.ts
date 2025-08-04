import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logGuard: CanActivateFn = (route, state) => {
   const router = inject(Router);
  if (localStorage.getItem('token')) {
    // If no token is found, redirect to the login page

  router.navigate(['/home']);
    // If a token is found, allow access to the route
    return false;
}else {
return true;


  }
};
