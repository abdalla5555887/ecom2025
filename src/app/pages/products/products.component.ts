import { SwishService } from './../../core/services/wish/swish.service';
import { ScartService } from './../../core/services/cart/scart.service';
import { CategoriesService } from './../../core/services/categories/categories.service';
import { Iproduct } from './../../shared/interface/iproduct';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/product/products.service';
import { nextTick } from 'process';
import { FlowbiteService } from '../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { Icategories } from '../../shared/categories/icategories';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

private readonly productsService = inject(ProductsService);
private readonly categoriesService = inject(CategoriesService);
private readonly  scartService= inject(ScartService);
private readonly SwishService = inject(SwishService);

myproduct:Iproduct[] = [];
mycat:Icategories[] = [];



callPro(){
  this.productsService.getProducts().subscribe({
      next: (res) => {
        this.myproduct = res.data;
        console.log(res );
      },
      error: (err) => {
        console.error( err);
      },
      complete: () => {
        console.log('Product fetching completed');
      }
    });
}
ngOnInit(): void {
 this.callPro()


  }

addwish(id:string):void {
  // Logic to add a product to the wishlist  console.log('Product added to wishlist');
  this.SwishService.addwish(id).subscribe({
    next: (res) => {
      console.log('Product added to wishlist', res);
      this.SwishService.wishid.next(res.data);

    },
    error: (err) => {
      console.error('Error adding product to wishlist', err);
    }
  });

}

addorder(id:string):void {
  // Logic to add a product to the
    this.scartService.addorder(id).subscribe({
    next: (res) => {
      console.log('Product added to cart', res);

    },
    error: (err) => {
      console.log('Error adding product to cart', err.error.message
      );
    }
  });
}

};
