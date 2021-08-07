import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  listProduct: Product[] = [];
  productInfo?: Product;

  lsProductsRelated: Product[] = [];
  category: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.scrollOnTop();
    this.getParamsFromUrl();
  }

  //TODO: get id from url
  getParamsFromUrl() {
    this.activatedRoute.paramMap.subscribe((response: any) => {
      this.id = response.get('id');
      this.category = response.get('cate');
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
