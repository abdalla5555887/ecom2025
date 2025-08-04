import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {


  // Clone the request to add the new header
  if (localStorage.getItem('token')!== null) {
      req = req.clone({
   setHeaders: {
    token:localStorage.getItem('token')!
 } })
  }

  return next(req);
};
