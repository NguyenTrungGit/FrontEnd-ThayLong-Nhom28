import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit, SimpleChange,DoCheck, SimpleChanges, OnChanges  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { filter } from 'underscore';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit,OnChanges {
  constructor(
    private productService: ProductService,
    private router: Router,
    private activeRouted: ActivatedRoute
  ) {}
  key: string = '';
  listProduct: Product[] = [];

  ngOnInit(): void {
    this.getQueryParams();
    this.getProductsByKey();


  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(typeof(changes.key))


  }


  getProductsByKey() {
    this.productService.getProductsBySearch(this.key).subscribe((res: any) => {
      if(this.listProduct!=res){
        console.log("xxcxcsdfsdfaedeasd")
      }
      this.listProduct = res;
      console.log(this.listProduct, 'list product filter');
    });
  }
  getQueryParams() {
    this.activeRouted.queryParams.subscribe((res: any) => {
      console.log(res.key, 'display querry');
      this.key = res.key;
      console.log(this.listProduct);
    });
  }
}
