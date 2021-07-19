import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog.model';
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
  public getProductsByPrice(category:string):Observable<Product[]>{
    const url =`${this.REST_API_SERVER}/product?category=${category}`;
    return this.httpClient.get<Product[]>(url,this.httpOptions);
  }
  public getBlog():Observable<Blog[]>{
    const url =`${this.REST_API_SERVER}/blog`;
    return this.httpClient.get<Blog[]>(url,this.httpOptions);
  }
  public updateCategory(id: string,updateField:Category): Observable<Category[]> {
    const url =`${this.REST_API_SERVER}/category/${id}`;
    return this.httpClient.put<Category[]>(url, updateField);
  }

}


