import { PayService } from './../../core/services/pay/pay.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})


export class CheckoutComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly payService = inject(PayService);
private readonly router = inject(Router);
  payform!: FormGroup;
  id: string = '';

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        this.id = res.get('id')!;
        console.log('Checkout ID:', this.id);
      }
    });

    this.payform = new FormGroup({
      "details": new FormControl(null, [Validators.required]),
      "phone": new FormControl(null, [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')]),
      "city": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}$')])
    });
  }

  onSubmit() {
    console.log('Form Submitted!', this.payform.value);
  }

  payvisa() {
    this.payService.pay(this.id, this.payform.value).subscribe({
      next: (res) => {
        console.log('Payment successful:', res);
        if (res.status === "success") {
          open(res.session.url, '_self');
        }
      },
      error: (err) => {
        console.error('Payment error:', err);
      }
    });
  }

  paycash() {
    this.payService.paycash(this.id, this.payform.value).subscribe({
      next: (res) => {
        console.log('Cash Payment successful:', res.data.status

)
      },
      error: (err) => {
        console.log('Payment error:', err.error.message);


      },
          complete: () => {
      // التنقل بعد الانتهاء
      this.router.navigate(['/home']);
    }

    });
  }
}
