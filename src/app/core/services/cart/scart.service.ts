import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScartService {


token = localStorage.getItem('token');


  constructor(private readonly httpClient: HttpClient) {
  }

  cartNumber : BehaviorSubject<number> = new BehaviorSubject(0)
  addorder(id:string): Observable<any> {
    // Replace 'your-api-endpoint' with the actual endpoint URL
    console.log(this.token);
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{"productId": id }
);

}

  getCart(): Observable<any> {
    return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/cart');
  }
  deleteorder(id:string): Observable<any> {
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,);
  }
  updatcount(count:any,id:string): Observable<any> {
    return this.httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {"count":count});
  }
  deleteCart(): Observable<any>  {
    return this.httpClient.delete('https://ecommerce.routemisr.com/api/v1/cart');
  }


}
