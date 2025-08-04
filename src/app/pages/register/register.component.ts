import { Router, RouterLink } from '@angular/router';
import { AuthService } from './../../core/services/auth/auth.service';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { group } from 'node:console';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  private readonly  authService=inject (AuthService);
  private readonly  router=inject (Router);



 Isloading: boolean = false;

errmsg: string = '';
sucsmsg: string = '';
  submitForm(){console.log(this.registerform);
    this.Isloading = true;
      this.confirmPass(this.registerform);
      console.log(this.confirmPass(this.registerform));
  console.log(this.registerform.value);
  console.log(this.registerform.valid);
  console.log(this.registerform.get('phone')?.errors);





   if (this.registerform.valid) {
    this.authService.signup(this.registerform.value).subscribe({
      next: (resp) => {console.log(resp);
        console.log("you are",resp.user.role,"is",resp.message);
        this.Isloading = false;
        this.sucsmsg = resp.message;
        this.errmsg = '';
        setTimeout(() => {
        this.router.navigate(['/login']);
        }, 4000);
       }




      , error: (err) => {console.log(err);
        console.log(err.error.message);
        this.Isloading = false;
        this.errmsg = err.error.message;
        this.sucsmsg = '';}
    })};

  }

  // FormGroup is a class that represents a group of controls in a form
  // FormControl is a class that represents a single control in a form


  registerform:FormGroup=new FormGroup({
    name: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(25) ]),
    email: new FormControl(null, [Validators.required,  Validators.email,Validators.minLength(5),Validators.maxLength(50)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9].{8,}$/) ]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9].{8,}$/) ]),

    phone: new FormControl(null, [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')]),

  }, {validators:this.confirmPass});




  confirmPass(group: AbstractControl):any {
    const pass = group.get('password')?.value;
    const repass = group.get('rePassword')?.value;
    if (pass!== repass) {
        return { mismatch: true };
    }else {

        return null; }
}}
