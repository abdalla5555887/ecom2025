import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor( private readonly httpClient:HttpClient) { }

  forgot(data:any):Observable<any> {
   return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',data)

  }


  resetcode(data:any):Observable<any> {
   return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',data)

  }


  resetpass(data:any):Observable<any> {
   return this.httpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data)

  }


}
