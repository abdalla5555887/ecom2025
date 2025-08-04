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
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-home',
  imports: [RouterLink,CarouselModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
private  toastrService= inject(ToastrService);
private readonly productsService = inject(ProductsService);
private readonly categoriesService = inject(CategoriesService);
private readonly  scartService= inject(ScartService);
private readonly SwishService = inject(SwishService);
private readonly spinner = inject(NgxSpinnerService);
myproduct:Iproduct[] = [];
mycat:Icategories[] = [];



callCat(){
  this.spinner.show();
  this.categoriesService.getCategories().subscribe({

      next: (res) => {
        this.mycat = res.data;
        console.log(res.data );
        this.spinner.hide();
      },

    });
}
callPro(){
  this.spinner.show();
  this.productsService.getProducts().subscribe({
      next: (res) => {
        this.myproduct = res.data;
        console.log(res );
         this.spinner.hide();
      },

    });
}
wishids:string []=[]
ngOnInit(): void {

      this.SwishService.wishid.subscribe((wishids: string[]) => {this.wishids = wishids;});
        console.log('Wish IDs:', this.wishids);


 this.callPro()
this.callCat()

  }

addwish(id:string):void {
  this.spinner.show();
  // Logic to add a product to the wishlist  console.log('Product added to wishlist');
  this.SwishService.addwish(id).subscribe({
    next: (res) => {
      console.log('Product added to wishlist', res);
      this.toastrService.success('Product added to wishlist', 'Success' ,{progressBar: true, timeOut: 1000});
            this.SwishService.wishid.next(res.data);

      this.spinner.hide();
    },

  });

}

isWish(id: string) {
  // array of ids of wishlist products
  // id of current product
  return this.wishids.includes(id) // true false
}
addorder(id:string):void {
   this.spinner.show();
  // Logic to add a product to the
    this.scartService.addorder(id).subscribe({
    next: (res) => {
      console.log('Product added to cart', res);
      this.toastrService.success('Product added to cart', 'Success',{progressBar: true, timeOut: 1000});
       this.spinner.hide();
      this.scartService.cartNumber.next(res.numOfCartItems);
    },

  });
}
mainslidOptions: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 2000,

    items: 1,



    nav: true

}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 9
      }
    },
    nav: true

}
};
