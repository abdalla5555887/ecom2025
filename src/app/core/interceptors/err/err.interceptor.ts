import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  // Logic on req
  const toastrService= inject(ToastrService);
const spinner = inject(NgxSpinnerService);


  return next(req).pipe( catchError( (err) => {
        toastrService.error ( err.error.message,'',{progressBar: true, timeOut: 1000});
// Logic error
    console.log(err);
     spinner.hide();

    return throwError( () => err )
  }) ); // Logic on response
};
