import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { VoucherService } from 'src/app/Services/NTrung/voucher.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-bill-confirm',
  templateUrl: './bill-confirm.component.html',
  styleUrls: ['./bill-confirm.component.css'],
})
export class BillConfirmComponent implements OnInit {
  items: Product[] = [];
  total: number = 0;

  diliveryPrice:number = 20000;
  discount:number = 0;

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private voucherService:VoucherService
  ) {
    this.discount = this.voucherService.getLocalVoucher();
  }

  ngOnInit(): void {
    this.scrollOnTop();
    this.getItem();
    this.total = this.getTotal();
  }

  getItem() {
    this.shoppingCartService.cartItems.subscribe((data) => {
      this.items = data;
      console.log(this.items);
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

  getTotal(): number {
    var total = 0;
    for (let index = 0; index < this.items.length; index++) {
      total += this.items[index].price * this.items[index].quantity;
    }
    return total;
    ``;
  }

  check():boolean{
    var check = true;
    if(this.discount>this.total){
      check = false;
    }
    return check;
  }
}
