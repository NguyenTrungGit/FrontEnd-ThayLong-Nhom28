import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  amount: any = 0;

  constructor() {}

  ngOnInit(): void {}

  up() {
    this.amount += 1;
  }

  down() {
    if (this.amount > 0) {
      this.amount--;
    }
  }
}
