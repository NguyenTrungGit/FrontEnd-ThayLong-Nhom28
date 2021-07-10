import { Component, OnInit } from '@angular/core';
import { Voucher } from 'src/app/model/voucher.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  amount: any = 1;
  discount?: Voucher;

  listVoucher: Voucher[] = [
    new Voucher('vc20000', '20000'),
    new Voucher('vc30000', '30000'),
    new Voucher('vc40000', '40000'),
    new Voucher('vc50000', '50000'),
  ];

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

  enterVoucher(event: any) {
    this.discount = this.listVoucher.find((n) => n.id === event.value);
  }
}
