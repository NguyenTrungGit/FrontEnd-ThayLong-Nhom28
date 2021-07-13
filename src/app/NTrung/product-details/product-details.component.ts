import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd  } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  listProduct?: Product[];
  productInfo?: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // TODO: croll on top
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    // FIXME: the method is not optimized
    this.getIdFromUrl();
    this.getProductById();
  }

  //TODO: get id from url
  getIdFromUrl() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });
  }

  //TODO: function: get list product and find product by id in this list product
  getProductById() {
    this.productService.getProducts().subscribe((res) => {
      this.listProduct = res;
      this.productInfo = this.listProduct.find((n) => n.id === this.id);
    });
  }
}
