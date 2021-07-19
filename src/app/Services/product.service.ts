import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
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
  public getCategorys():Observable<Category[]>{
    const url =`${this.REST_API_SERVER}/category`;
    return this.httpClient.get<Category[]>(url,this.httpOptions);
  }
  public getProductsByCategory(category:string):Observable<Product[]>{
    const url =`${this.REST_API_SERVER}/product?category=${category}`;
    return this.httpClient.get<Product[]>(url,this.httpOptions);
  }
  public getProductsByPrice(minPrice:number,maxPrice:number):Observable<Product[]>{
    const url =`${this.REST_API_SERVER}/product?price_gte=${minPrice}&price_lte=${maxPrice}`;
    return this.httpClient.get<Product[]>(url,this.httpOptions);
  }
  public getProductsByPriceAndCategory(minPrice:number,maxPrice:number,category:string):Observable<Product[]>{
    const url =`${this.REST_API_SERVER}/product?price_gte=${minPrice}&price_lte=${maxPrice}&category=${category}`;
    return this.httpClient.get<Product[]>(url,this.httpOptions);
  }

  public getProductsById(id: string): Observable<Product[]> {
    const url = `${this.REST_API_SERVER}/product?id=${id}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }

  public getProductsRelated(page: Number, category: string): Observable<Product[]> {
    const url = `${this.REST_API_SERVER}/product?category=${category}&_limit=4&_page=${page}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }
}


