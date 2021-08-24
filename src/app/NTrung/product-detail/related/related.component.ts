import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css'],
})
export class RelatedComponent implements OnInit {
  productsRelated: Product[] = [];

  cate: any;
  length: number = 0;
  page: number = 1;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private shoppingCartService:ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.getParamsFromURL();
    this.getPage();
    this.getProducts();
  }

  getParamsFromURL() {
    this.route.paramMap.subscribe((res: any) => {
      this.cate = res.get('cate');
    });
  }

  getPage() {
    if (this.cate === 'rau') {
      this.page = Math.floor(Math.random() * Math.ceil(72 / 4) + 1);
    }

    if (this.cate === 'cu') {
      this.page = Math.floor(Math.random() * Math.ceil(24 / 4) + 1);
    }

    if (this.cate === 'qua') {
      this.page = Math.floor(Math.random() * Math.ceil(46 / 4) + 1);
    }

    if (this.cate === 'traicay') {
      this.page = Math.floor(Math.random() * Math.ceil(70 / 4) + 1);
    }

    if (this.cate === 'nam') {
      this.page = Math.floor(Math.random() * Math.ceil(8 / 4) + 1);
    }
  }

  getProducts() {
    this.productService
      .getProductsRelated(this.page, this.cate)
      .subscribe((res: any) => {
        this.productsRelated = res;
      });
  }

  addToCart(item:Product){
    item.quantity = 1;
    this.shoppingCartService.addToCart(item);
  }
}
