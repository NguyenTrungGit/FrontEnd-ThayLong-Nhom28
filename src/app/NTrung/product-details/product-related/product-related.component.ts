import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-related',
  templateUrl: './product-related.component.html',
  styleUrls: ['./product-related.component.scss'],
})
export class ProductRelatedComponent implements OnInit {
  lsProductsRelated?: Product[];
  @Input() categoryInput: any;
  category: any;
  randomPage: any;

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.category = this.categoryInput;
    this.getProductsRelated();
  }

  ngOnInit(): void {
    this.category = this.categoryInput;
    this.getProductsRelated();
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
}
