import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog.model';
import { Category } from '../model/category.model';
import { Product } from '../model/product.model';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    const url = `${this.REST_API_SERVER}/product`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }
  public getCategorys(): Observable<Category[]> {
    const url = `${this.REST_API_SERVER}/category`;
    return this.httpClient.get<Category[]>(url, this.httpOptions);
  }
  public getProductsByCategory(category: string): Observable<Product[]> {
    const url = `${this.REST_API_SERVER}/product?category=${category}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }
  public getProductsByPrice(
    minPrice: number,
    maxPrice: number,
    page: number
  ): Observable<Product[]> {
    const url = `${this.REST_API_SERVER}/product?price_gte=${minPrice}&price_lte=${maxPrice}&_limit=12&_page=${page}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }

  public getProductsByPriceAndCategory(
    minPrice: number,
    maxPrice: number,
    category: string,
    page: number
  ): Observable<Product[]> {
    const url = `${this.REST_API_SERVER}/product?price_gte=${minPrice}&price_lte=${maxPrice}&category=${category}&_limit=12&_page=${page}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }

  public getBlog(): Observable<Blog[]> {
    const url = `${this.REST_API_SERVER}/blog`;
    return this.httpClient.get<Blog[]>(url, this.httpOptions);
  }

  public getProductsById(id: string): Observable<Product[]> {
    const url = `${this.REST_API_SERVER}/product?id=${id}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }

  public getProductsRelated(
    page: Number,
    category: string
  ): Observable<Product[]> {
    const url = `${this.REST_API_SERVER}/product?category=${category}&_limit=4&_page=${page}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }

  public getLengthByPrice(
    minPrice: number,
    maxPrice: number
  ): Observable<Product[]> {
    const url = `${this.REST_API_SERVER}/product?price_gte=${minPrice}&price_lte=${maxPrice}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }

  public getLengthByPriceAndCategory(
    minPrice: number,
    maxPrice: number,
    category: string
  ): Observable<Product[]> {
    const url = `${this.REST_API_SERVER}/product?price_gte=${minPrice}&price_lte=${maxPrice}&category=${category}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }

  public getPager(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 12
  ) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages = _.range(startPage, endPage + 1);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}
