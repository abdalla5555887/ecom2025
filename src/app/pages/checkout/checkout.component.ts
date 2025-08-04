import { PayService } from './../../core/services/pay/pay.service';
import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly payService = inject(PayService);
payform !:FormGroup;
id:string = ''!;
  onSubmit() {
  // if (this.payform.valid) {
    console.log('Form Submitted!', this.payform.value);

    // You can call your service to process the payment here
    // For example:
    this.payService.pay(this.id, this.payform.value).subscribe({
      next: (res) => {
        console.log('Payment successful:', res);
      if (res.status==="success") {
        // Redirect to the payment page or handle the session ID as needed
        open (res.session.url, '_self');
      }
        // Handle successful payment response
      }   ,
      error: (err) => {
        console.error('Payment error:', err);
        // Handle payment error response
      },})




    // Here you can handle the form submission, e.g., send data to the server
  // }
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  // //Add 'implements OnInit' to the class.
  this.activatedRoute.paramMap.subscribe({
    next: (res) => {
    this.id = res.get('id')!;
      console.log('Checkout ID:', this.id);
    }
  }
);

  // Initialize the form group with controls and validators
      // You can use the ID to fetch data or perform actions related to the checkout


 this. payform = new FormGroup({


        "details":new FormControl (null,[Validators.required]),
        "phone":new FormControl (null,[Validators.required, Validators.pattern('/^01[0125][0-9]{8}$/')]),
        "city":new FormControl (null,[Validators.required])


  });


}
}
