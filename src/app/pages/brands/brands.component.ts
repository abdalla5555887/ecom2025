import { SwishService } from './../../core/services/wish/swish.service';
import { ScartService } from './../../core/services/cart/scart.service';
import { CategoriesService } from './../../core/services/categories/categories.service';
import { Ibrand, Datum } from './../../shared/interface/ibrand';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/product/products.service';
import { nextTick } from 'process';
import { FlowbiteService } from '../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { Icategories } from '../../shared/categories/icategories';
import { RouterLink } from '@angular/router';
import { BrandService } from '../../core/services/brand/brand.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {

  private readonly brandService = inject(BrandService);
  mybrand: Datum[] = [];

  callPro(){
    this.brandService.getbrands().subscribe({
      next: (res: Ibrand) => {
        this.mybrand = res.data;
        console.log(res.data );
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
}
