import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Icategories } from '../../shared/categories/icategories';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {


private readonly categoriesService = inject(CategoriesService);



mycat:Icategories[] = [];


callCat(){
  this.categoriesService.getCategories().subscribe({
      next: (res) => {
        this.mycat = res.data;
        console.log(res.data );
      },
      error: (err) => {
        console.log( err);
      },
      complete: () => {
        console.log('cat fetching completed');
      }
    });
}
ngOnInit(): void {

this.callCat()

  }
}
