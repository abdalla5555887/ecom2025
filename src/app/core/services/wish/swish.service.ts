import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwishService {
wishid= new BehaviorSubject <string[]>([]);

token = localStorage.getItem('token');

  constructor(private readonly httpClient: HttpClient) {
  }
  addwish(id:string): Observable<any> {
    // Replace 'your-api-endpoint' with the actual endpoint URL
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',{"productId": id },{ headers:{ token: this.token!} }
);

}
  getWishList(): Observable<any> {
    return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist', { headers: { token: this.token! } });
  }
  deleteWish(id: string): Observable<any> {
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, { headers: { token: this.token! } });
  }
  getWishCount(): Observable<any> {
    return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist/count', { headers: { token: this.token! } });
  }



}
