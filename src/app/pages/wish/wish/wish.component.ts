import { ToastrService } from 'ngx-toastr';
import { SwishService } from './../../../core/services/wish/swish.service';
import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../../shared/interface/iwish'; // استورد الواجهة الجديدة Product
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wish',
  imports: [],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {
  private readonly swishService = inject(SwishService);
  private toastrService=inject(ToastrService);
  wishListProducts: Product[] = [];

  ngOnInit(): void {

this.swishService.getWishList().subscribe({
  next: (res) => {
    console.log(res);
    this.wishListProducts = res.data;

  },
  error: (err) => {
    console.log(err);

  },
});





  }
  deletwish(id: string): void {
  this.swishService.deleteWish(id).subscribe({
      next: (res) => {
        console.log('Cart items:----',   res.data);
        this.wishListProducts= res.data;
            this.swishService.getWishList().subscribe({
      next: (res) => {
        console.log('API Response:', res);

        this.wishListProducts = res.data;
      },
      error: (err) => {
      }
    });
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
      },
      complete: () => {
        console.log('Cart fetching completed');
      }
    });

}
}
