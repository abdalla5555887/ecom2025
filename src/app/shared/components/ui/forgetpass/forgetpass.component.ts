import { Router } from '@angular/router';
import { ForgotService } from './../../../../core/services/forgot/forgot.service';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgetpass',
  imports: [ReactiveFormsModule,],
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {
  private router = inject(Router);

  constructor(public forgotService: ForgotService) {}

    step:number = 1;

  forgotpassForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  });

  restcodForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required])
  });

  restpassForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9].{8,}$/) ])
  });





  Isloading: boolean = false;
  errmsg: string = '';
  sucsmsg: string = '';
emailvalue='';

forgot(){
  this.forgotService.forgot(this.forgotpassForm.value).subscribe({
    next: (res) => {console.log(res.message);
      this.emailvalue= this.forgotpassForm.value.email;
      this.restpassForm.patchValue({ email: this.emailvalue });
      this.step=2

    },
    error: (err) => {
      this.Isloading = false;
      this.errmsg = err.error.message;
      console.log(err);
      console.log(err.error.message);
      console.log(this.forgotpassForm.value.email);
    },


  })
}





resetcode(){
  this.forgotService.resetcode(this.restcodForm.value ).subscribe({
    next: (res) => {console.log(res.message);
      this.step=3

    },
    error: (err) => {
      this.Isloading = false;
      this.errmsg = err.error.message;
      console.log(err);
      console.log(err.error.message);
      console.log(typeof( this.restcodForm.value.resetCode));
      console.log( this.restcodForm.value.resetCode);
    },


  })
}





resetpass(){
  this.forgotService.resetpass(this.restpassForm.value).subscribe({
    next: (res) => {console.log(res.message);
      this.sucsmsg = res.message;

        this.router.navigate(['/login']);

    },
    error: (err) => {
      this.Isloading = false;
      this.errmsg = err.error.message;

      console.log(err);
    },


  })
}






}

