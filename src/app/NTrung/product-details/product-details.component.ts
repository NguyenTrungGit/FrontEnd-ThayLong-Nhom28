import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  listProduct: Product[] = [];
  productInfo?: Product;

  lsProductsRelated: Product[] = [];
  category: any;
  randomPage: any;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.scrollOnTop();
    this.getParamsFromUrl();
    this.getProductById();
    this.getProductsRelated();
  }

  //TODO: get id from url
  getParamsFromUrl() {
    this.activatedRoute.paramMap.subscribe((response: any) => {
      this.id = response.get('id');
      this.category = response.get('cate');
    });
  }

  getProductById() {
    // TODO: return a array, in array have 1 product has this.id and find product by id (Optimized)
    this.productService.getProductsById(this.id).subscribe((res: any) => {
      this.productInfo = res.find((n: any) => n.id === this.id);
      console.log(res);
    });
  }

  getProductsRelated() {
    if (this.category === 'rau') {
      this.randomPage = Math.floor(Math.random() * 18 + 1);
    } else if (this.category === 'traicay') {
      this.randomPage = Math.floor(Math.random() * 17 + 1);
    } else if (this.category === 'qua') {
      this.randomPage = Math.floor(Math.random() * 10 + 1);
    } else if (this.category === 'nam') {
      this.randomPage = Math.floor(Math.random() * 1 + 1);
    } else if (this.category === 'cu') {
      this.randomPage = Math.floor(Math.random() * 6 + 1);
    }

    this.productService
      .getProductsRelated(this.randomPage, this.category)
      .subscribe((response: Product[]) => {
        this.lsProductsRelated = response;
      });
  }

  scrollOnTop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}