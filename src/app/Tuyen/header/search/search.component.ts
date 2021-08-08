import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit, SimpleChange,DoCheck, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { filter } from 'underscore';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private activeRouted: ActivatedRoute
  ) {}
  key: string = '';
  listProduct: Product[] = [];
  totalLenght:any;
  page:number =1;
  showport:any =[];
  SortbyParam ='';


  ngOnInit(): void {
    this.getQueryParams();
    this.getProductsByKey();
    console.log("on it");

  }


  // ngOnChanges(changes: SimpleChanges): void {
  //   this.getQueryParams();
  //   this.key;
  //   this.getProductsByKey();
  //   console.log("on change");
  // }


  getProductsByKey() {
    this.productService.getProductsBySearch(this.key).subscribe((res: any) => {
      this.listProduct = res;
      console.log(this.listProduct, 'list product filter');
    });
  }

  getQueryParams() {
    this.activeRouted.queryParams.subscribe((res: any) => {
      console.log(res.key, 'display querry');
      this.key = res.key;
    });
  }

}
