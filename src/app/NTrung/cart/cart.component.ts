import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
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
