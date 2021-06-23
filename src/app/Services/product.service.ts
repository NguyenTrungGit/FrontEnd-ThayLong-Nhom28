import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private REST_API_SERVER='http://localhost:3000';
private  httpOptions ={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}
  constructor(private httpClient:HttpClient) { }
  public getProducts():Observable<Product[]>{
    const url =`${this.REST_API_SERVER}/product`;
    return this.httpClient.get<Product[]>(url,this.httpOptions);
  }
}
