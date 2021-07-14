import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  amount: any = 1;
  checking = false;
  // TODO: receive data from product details
  @Input() productInfo?: Product;

  constructor() {}

  ngOnInit(): void {}

  up() {
    this.amount += 1;
  }

  down() {
    if (this.amount > 1) {
      this.amount--;
    }
  }
}
