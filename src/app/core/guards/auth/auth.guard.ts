import { isPlatformBrowser } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);
  if (isPlatformBrowser(platformId)) {
    if (localStorage.getItem('token')) {
      // If a token is found, allow access to the route
      return true;
    } else {
      // If no token is found, redirect to the login page
      return router.createUrlTree(['/login']);
    }
  }else{
  // If not running in the browser, deny access
  return false;}
};
