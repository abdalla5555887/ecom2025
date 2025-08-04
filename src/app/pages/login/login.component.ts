import { Component, inject, NgProbeToken } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {





    private  authService=inject (AuthService);
    private  router=inject (Router);
  Isloading: boolean = false;
errmsg: string = '';
sucsmsg: string = '';
    submitForm(){console.log(this.LoginComponentform);
      this.Isloading = true;
    console.log(this.LoginComponentform.value);
    console.log(this.LoginComponentform.valid);

    if (this.LoginComponentform.valid) {
    this.authService.signin(this.LoginComponentform.value).subscribe({
        next: (resp) => {
          console.log(resp);
          this.Isloading = false;
          this.sucsmsg = resp.message;
          this.errmsg = '';
          // Store the token in localStorage

        localStorage.setItem('token',resp.token),
        // Decode the token to get user data

    jwtDecode(localStorage.getItem('token') !);
this.authService.getUserData();



          setTimeout(() => {
        this.router.navigate(['/home']);
        }, 4000);
         }
        , error: (err) => {
          console.log(err.error.message);
          this.Isloading = false;
        this.errmsg = err.error.message;
        this.sucsmsg = '';
        }
      })};

    }

    // FormGroup is a class that represents a group of controls in a form
    // FormControl is a class that represents a single control in a form


    LoginComponentform:FormGroup=new FormGroup({
      email: new FormControl(null, [Validators.required,  Validators.email,Validators.minLength(5),Validators.maxLength(50)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9].{8,}$/) ]),


    },);


}
function getUserData() {
  throw new Error('Function not implemented.');
}

