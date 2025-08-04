import { Component, inject } from '@angular/core';
import { ScartService } from '../../core/services/cart/scart.service';
import { Icart } from '../../shared/interface/icart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private readonly scartService = inject(ScartService);
  cartItems: Icart = {} as Icart;
  cartid: string = ''!;

  ngOnInit(): void {
    this.scartService.getCart().subscribe({
      next: (res) => {
        this.cartItems = res.data;
        this.cartid = res.data._id;
      },
      error: (err) => {
        console.error('Error fetching cart items:', err);
      },
      complete: () => {
      }
    });

  }
  deleteItem(id: string): void {
  this.scartService.deleteorder(id).subscribe({
      next: (res) => {
        this.scartService.cartNumber.next(res.numOfCartItems);
        this.cartItems = res.data;
      },
      error: (err) => {
      },
      complete: () => {
      }
    });

}

updatecount(count:any,id:string): void {

  this.scartService.updatcount(count,id).subscribe({
      next: (res) => {
        this.scartService.cartNumber.next(res.numOfCartItems);
        this.cartItems = res.data;
      },
      error: (err) => {
      },
      complete: () => {
      }
    });


}

deleteCart(): void {
  this.scartService.deleteCart().subscribe({
      next: (res) => {
                this.scartService.cartNumber.next(0);

        this.cartItems = {} as Icart; // Clear the cart items after deletion
      },
      error: (err) => {
      },
      complete: () => {
      }
    });

  }
}
