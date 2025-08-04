import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { sign } from 'crypto';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient, private router: Router) { }
  userData: any ;
  signup(data: Object): Observable<any> {
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data);
  }
  signin(data: Object): Observable<any> {
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', data);
  }

  getUserData(): void {
    // This method can be used to retrieve user data if needed
    // For now, it is empty as per the original code
    console.log(jwtDecode(localStorage.getItem('token') !));
    this.userData = jwtDecode(localStorage.getItem('token')!);
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.userData = null;
   this.router.navigate(['/login']);
    // Optionally, you can navigate to the login page or perform other actions after sign out
  }


}


