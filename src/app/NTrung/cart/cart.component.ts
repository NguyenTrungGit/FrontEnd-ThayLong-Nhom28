import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Voucher } from 'src/app/model/voucher.model';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

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
  constructor(private shoppingcartService: ShoppingCartService) {}
  items:Product[] =[];

  ngOnInit(): void {
    this.shoppingcartService.cartItems.subscribe(data=>{
      this.items=data;
    })
  }

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
