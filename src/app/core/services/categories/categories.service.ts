import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private HttpClient:HttpClient) {

  }
  getCategories():Observable<any>{
  return this.HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  getSpCategories(id:string):Observable<any>{
  return  this.HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }
}
