import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/product/products.service';
import { Iproduct } from '../../shared/interface/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  private readonly activedrouter = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);

  proId:any;
  prodata:Iproduct= {} as Iproduct;
  ngOnInit(): void {


    this.activedrouter.paramMap.subscribe({
      next: (res) => {
        this.proId=res.get('id')
        this.productsService.getSpProducts(this.proId).subscribe({
          next: (res) => {
            this.prodata = res.data;
            // Log the response to the console for debugging
          },
          error: (err) => {
            console.error(err);
          },
          complete: () => {
          }
        });
      }
    });

  }

}
